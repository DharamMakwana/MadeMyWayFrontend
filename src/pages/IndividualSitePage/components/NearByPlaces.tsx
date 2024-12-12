import React, { useEffect, useState } from "react"
import { query, where, collection, getDocs } from "firebase/firestore"
import { db } from "../../../firebaseConfig"
import { SearchCard } from "../../SearchPage/components/SearchCard"

export const NearByPlaces = ({ city }) => {
  const [data, setData] = useState([])
  const fetchDataBasedOnCity = async () => {
    try {
      const q = query(collection(db, "Places"), where("cityname", "==", city))
      const data = await getDocs(q)

      console.log(
        data.docs.map((doc) => doc.data()).filter((doc) => doc.status)
      )
      //@ts-ignore
      setData(data.docs.map((doc) => doc.data()).filter((doc) => doc.status))
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    if (!city) return
    fetchDataBasedOnCity()
  }, [])

  return (
    <>
      <div style={{ padding: "0 10px" }}>
        <p
          style={{
            fontSize: "var(--pagetitle-text)",
            color: "var(--dark-text)",
          }}
        >
          Nearby places
        </p>
        <p
          style={{
            fontSize: "var(--para-text)",
            color: "var(--light-text)",
            marginBottom: "1rem",
          }}
        >
          Let's discover some new place
        </p>
      </div>
      <div
        style={{
          display: "flex",
          overflowX: "scroll",
          padding: "0 10px",
        }}
      >
        {data.length ? (
          data.map((data, i) => (
            <div style={{ minWidth: "80%" }}>
              <SearchCard key={i} info={data} />
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", margin: "0 auto", color: "#555" }}>
            {`No Data to Show for ${city}`}
          </p>
        )}
      </div>
      <br />
    </>
  )
}
