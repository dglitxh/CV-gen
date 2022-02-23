import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { Timeline, Card } from 'antd'

export const ExpDisplay = (props) => {
    const { entries, name } = props;
    if( entries){
    return(
      <div className="experience">
        <h1 className="mt-4 bg-gray-200 px-3 text-sky-400">{name}</h1>
        <Timeline>
        {entries.map((entry) => {
          console.log(entry)
            return (
              <>
              <Timeline.Item>
               <Card
                title=""
                actions={[ <EditOutlined/>, <DeleteOutlined/>,]}
                >
                    <div className='cardhead'>
                      <h5 className="text-2xl ">{`${entry.workplace}`}</h5>
                      <h5>{`${entry.startDate} ${entry.endDate? entry.endDate: 'Current'} `}</h5>
                    </div>
                    <h6 className="text-xl text-gray-500"> {`${entry.position}`}</h6>
                    <ul className="pl-3">
                      {entry.tasks.split(/\n/).map((task)=>{
                        return(
                          <li>{task}</li>
                        )
                      })}
                    </ul>
            </Card>
            </Timeline.Item>
            </>
            )
        })}
        </Timeline>
      </div>
    )
      }else{
        console.log('there is a problem with the display component')
        return <div></div>
      }
  }


  export const AboutDisplay = (props) => {
      const { entries } = props;
      if(entries.length > 0){
      return(
        <div className="abouted">
            <div>
              <h1 className='text-4xl text-sky-600'>{`${entries[0].firstName} ${entries[0].lastName}`}</h1>
            </div>
            <div className="inline-flex text-gray-400">
              <p className='pr-3'>{entries[0].email},</p>
              <p className='pr-3'>{entries[0].phone},</p>
              <p className='pr-3'>{entries[0].address},</p>
              <p className='pr-3'>{entries[0].age}</p>
            </div>

        </div>
      )
        }else{
          console.log('there is a problem with the display component')
          return <div></div>
        }
    }

    export const EduDisplay = (props) => {
        const { entries, name } = props;
        if( entries){
        return(
          <div className="education">
            <h1 className="mt-4 bg-gray-200 px-3 text-sky-400">{name}</h1>
            <Timeline>
            {entries.map((entry) => {
              console.log(entry)
                return (
                  <>
                  <Timeline.Item>
                   <Card
                    title=""
                    actions={[ <EditOutlined/>, <DeleteOutlined/>,]}
                    >
                      <div>
                        <div className="cardhead">
                          <h5 className="text-xl">{entry.school}</h5>
                          <h5 className="text-right">{`${entry.startDate} to ${entry.endDate? entry.endDate: 'Current'}`}</h5>
                        </div>
                        <h6 className="text-lg"> {entry.program}</h6>

                        </div>
                </Card>
                </Timeline.Item>
                </>
                )



            })}
            </Timeline>
          </div>
        )
          }else{
            console.log('there is a problem with the display component')
            return <div></div>
          }
      }
