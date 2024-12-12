import { useEffect, useState } from "react"
import { useDebouncedValue } from "@mantine/hooks"

import { TextInput } from "@mantine/core"
import { Loader } from "../../../components/Loader"

import { query, where, collection, getDocs } from "firebase/firestore"
import { db } from "../../../firebaseConfig"

export const SearchInput = ({ setData }) => {
  const [city, setCity] = useState("")
  const [loading, setLoading] = useState(false)
  const [debounced] = useDebouncedValue(city, 200)

  const fetchDataBasedOnCity = async () => {
    try {
      setLoading(true)

      const q = query(collection(db, "Places"), where("status", "==", true))

      const data = await getDocs(q)
      setData(
        data.docs
          .map((doc) => doc.data())
          .filter(
            (doc) =>
              doc.placename.toLowerCase().includes(debounced.trim()) ||
              doc.cityname.toLowerCase().includes(debounced.trim())
          )
      )
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!debounced) return

    fetchDataBasedOnCity()
  }, [debounced])

  return (
    <TextInput
      placeholder="Search..."
      size="md"
      rightSection={loading && <Loader />}
      radius={8}
      styles={() => ({
        root: {
          minWidth: "320px",
          margin: "1rem 0",
        },
        error: {
          fontSize: "var(--para-text)",
        },
        rightSection: {
          right: "2%",
        },
        label: {
          fontSize: "var(--title-text)",
          color: "var(--dark-text)",
        },
        description: {
          fontSize: "var(--para-text)",
          color: "var(--lighter-text)",
          fontWeight: "var(--medium)",
        },
        input: {
          padding: "18px 10px",
          "&:focus": {
            border: "1.5px solid rgba(91,174,204,1)",
            boxShadow: "rgba(91,174,204,.3) 0 0 0 2.5px",
          },
          "&:placeholder": {
            fontSize: "var(--caption-text)",
          },
        },
      })}
      style={{ padding: "2rem 0" }}
      onChange={(e) => setCity(e.target.value)}
    />
  )
}
