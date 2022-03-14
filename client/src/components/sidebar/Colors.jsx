const Colors = ({ colors }) => {
  return (
    <div className="colors">
      {
        colors.map((color) => {
          return <p>{color.name}</p>
        })
      }
    </div>
  )
}

export default Colors