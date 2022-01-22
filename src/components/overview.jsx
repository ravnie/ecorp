export const Overview = (props) => {
  return (
    <div>
      <div className='main-container'>
      <div className='row'>
        <div className='col-md-4 col-md-offset-2 section-title overview'>
          <h2 className="text-center" style={{color: "white"}} >Massive multiplayer game on the Solana blockchain</h2>
        </div>
      </div>
        <div className='row'>
            <div className='col-md-4 col-md-offset-2 intro-text'>
              <p className= 'overview-text-box'>
              The game takes place in a dystopian future where giant corporations rule the world. 
              Take part in the game as one of three factions with a total of 9999 NFT’s.
              The game is Play to Earn, which means you generate in-game coins by playing and interacting with the game. 
              These coins can be sold freely.
              </p>
            </div>
            <div className='col-md-4 col-md-offset-1 intro-text'>
              <p className= 'overview-text-box'>
                As you level up your NFT, you will be able to choose 
                from different specialisations that gives different and unique ways to personalise your NFT. 
                This will give you the chance to create NFT-specific items that other players needs.
                To play the game and start earning coins, you will need to stake your NFT through our website. 
                NFT stats in the game does not reset upon selling the NFT.

              </p>
            </div>

        </div>
    </div>
  </div>
  )
}
