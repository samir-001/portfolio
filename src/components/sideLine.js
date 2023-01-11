const SideLine = (props)=>(
    <div className={`road ${props.direction}`}>
    <div className='road__container'>
      <div className="road__content">
        {props.children}
      </div>
    </div>
  </div>
)
export default SideLine