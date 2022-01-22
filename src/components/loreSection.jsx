export const LoreSection = (props) => {
  return (
    <div>
      <div className='main-container'>
      <div className='row'>

          <div className='col-md-4 col-md-offset-4 section-title overview'>
            <h2 className="text-center" style={{color: "white"}} >Your character is needed to rebuild the Tasmania Industries</h2>
            <h3 className="text-center" style={{color: "white", marginBottom: "4em", fontSize: "16px"}} >You will start as a worker, but progressing through the ranks of the Tasmania Industries you can become the CEO</h3>
          </div>
      </div>
           <div className='row'>
            <div className='col-md-4 col-md-offset-2 intro-text'>

              <p className= 'overview-text-box'>
As the world began to rebuild, it was not long before factions began to arise. Tasmania Industries took over many of the abandoned industries, and started producing the many products and facilities that humanity had missed. FutureCorp saw the necessity of this production, but their ambitions were higher than simply restoring what humanity once had. 
</p>
              <p className= 'overview-text-box'>

Their name described their intentions: giving humanity a future to be proud of. 
</p>
              <p className= 'overview-text-box'>

At first, FutureCorp restarted the spaceflight industry. Immediately they found themselves dependent on the manufacturing capabilities of Tasmania Industries to mine the resources required. They had the scientists and the engineers required to create the ships, but they lacked the raw materials. 
</p>
              <p className= 'overview-text-box'>

Exploration of asteroid fields around Earth was the first mission. FutureCorp knew that Tasmania Industries required the precious minerals contained within the asteroids, and that this would provide them with a guaranteed income to advance their efforts to colonise Mars and bring the future closer to humanity. 

              </p>
            </div>

            <div className='col-md-4 col-md-offset-0 intro-text'>
              <img className= "worker-image" src={'img/worker-image.png'} />
            </div>
          </div>

    </div>
  </div>
  )
}
