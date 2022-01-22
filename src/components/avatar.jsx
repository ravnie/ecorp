export const Avatar = (props) => {
  return (
    <div className='main-container'>
    <div className="avatar-container">
      <div className="row">
        <div className='col-md-8 col-md-offset-2'>
          <h2></h2>
        </div>
      </div>
        <div className='row avatar-row'>
        <div className='col-md-8 col-md-offset-2'>

          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-2 col-sm-6'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.faction}</p>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
    </div>

  )
}
