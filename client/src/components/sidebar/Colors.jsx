const Colors = ({ colors }) => {
  return (
    <div className="colors">
      {
        colors.map((color) => {
          return <p className="color" key={color.id}>{color.name}</p>
        })
      }
    </div>
  )
}

export default Colors