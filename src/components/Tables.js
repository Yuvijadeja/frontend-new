import React from 'react'
import Slider from "react-slick"

function Tables({ tables, selectedTable, setSeletctedTable }) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1
  }

  return (
    <>
      <Slider {...settings}>
        {tables.map((rows, index) => {
          return (
            <div className="dropdown" key={index}>
              {rows.value == selectedTable.value ?
                <button
                  type="button"
                  className='button active'
                  onClick={() => setSeletctedTable(rows)}
                >
                  {rows.label}
                </button> :
                <button
                  type="button"
                  className='button'
                  onClick={() => setSeletctedTable(rows)}
                >
                  {rows.label}
                </button>
              }
            </div>
          )
        })}
      </Slider>
    </>
  )
}

export default Tables