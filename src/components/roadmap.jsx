import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Roadmap = (props) => {
    return (
    <div className='main-container'>
      <div className='row'>

      <div className='col-md-4 col-md-offset-4 section-title overview'>
        <h2 className="text-center" style={{color: "white"}} >Roadmap</h2>
        <h3 className="text-center" style={{color: "white", marginBottom: "4em", fontSize: "16px"}} >A lot is already done if you are reading this. The community discord has been set up, and as you can see, the website is up and running. We’re currently preparing and finalising everything</h3>
      </div>
  </div>
      <div className="row">
      <div className='col-md-8 col-md-offset-2'>

			<VerticalTimeline
						    lineColor="#c2c0c0"
>

			  <VerticalTimelineElement
			    className="vertical-timeline-element--work"
    			contentStyle={{ }}
			    contentArrowStyle={{ borderRight: '7px solid' }}
   			    contentStyle={{color: "#c2c0c0", boxShadow: '1px 1px 1px 1px rgb(47, 67, 83)', backgroundImage: 'linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)'}}
			    date="March 2022"
			    iconStyle={{ background: '#0cad8a', color: '##c2c0c0' }}
			  >
			    <h3 className="vertical-timeline-element-title">Phase 1: </h3>
			    <ul className="roadmap-text">
			    	<li>
			      	Launch community discord & website
			    	</li>
			    	<li>
			    	Whitepaper
			    	</li>
			    </ul>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
			    className="vertical-timeline-element--work"
			    date="June 2022"
   			    contentArrowStyle={{ borderRight: '7px solid' }}

			    iconStyle={{ background: '#0cad8a', color: '##c2c0c0' }}
   			    contentStyle={{color: "#c2c0c0", boxShadow: '1px 1px 1px 1px rgb(47, 67, 83)', backgroundImage: 'linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)'}}

			  >
			    <h3 className="vertical-timeline-element-title">Phase 2: </h3>
			    <ul className="roadmap-text">
			    	<li>
			      	Hype
			    	</li>
			    	<li>
			    	MINT: Tasmania (33%)
			    	</li>
			    	<li>
					Staking			    	
					</li>
			    </ul>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
			    className="vertical-timeline-element--work"
			    date="August 2022"
  			    contentArrowStyle={{ borderRight: '7px solid' }}
   			    contentStyle={{color: "#c2c0c0", boxShadow: '1px 1px 1px 1px rgb(47, 67, 83)', backgroundImage: 'linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)'}}

			    iconStyle={{ background: '#0cad8a', color: '#fff' }}
			  >
			    <h3 className="vertical-timeline-element-title">Phase 3: </h3>
			    <ul className="roadmap-text">

				    <li>
				      MINT: FutureCorp (33%)
				    </li>
				    <li>
				      Game launch!
				    </li>
				    </ul>
			  </VerticalTimelineElement>
			  <VerticalTimelineElement
			    className="vertical-timeline-element--work"
			    date="2023"
   			    contentArrowStyle={{ borderRight: '7px solid' }}
   			    contentStyle={{color: "#c2c0c0", boxShadow: '1px 1px 1px 1px rgb(47, 67, 83)', backgroundImage: 'linear-gradient(315deg, #2f4353 0%, #d2ccc4 74%)'}}

			    iconStyle={{ background: '#0cad8a', color: '#fff' }}
			  >
			    <h3 className="vertical-timeline-element-title">Phase 4: </h3>
			    <ul className="roadmap-text">

				    <li>
				      MINT: Rebels (33%)
				    </li>
				    <li>
				      Game launch!
				    </li>
				    </ul>
			  </VerticalTimelineElement>
			</VerticalTimeline>
        </div>
    </div>
      </div>

    )
  }