const Card = ({ children, className }) => {
  return (
    <div className={`card shadow-sm p-3 m-5 rounded ${className}`} style={{ background: `linear-gradient(to right, rgb(113, 151, 253), rgb(171, 214, 255))` }}>
      {children}
    </div>
  )
}

export default Card