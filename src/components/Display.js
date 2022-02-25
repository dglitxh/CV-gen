import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
import { Timeline, Card } from 'antd'


export const ExpDisplay = (props) => {
    const { entries, name } = props;

    const remove = (id) => {
      props.handleDelete(id)
    }

    const edit = (id) => {
      props.handleEdit(id)
    }
    
    
    return(
      <div>
      {entries? <div className="experience">
        <h1 className="mt-4 bg-gray-200 p-2 text-sky-600 text-2xl">{name}</h1>
        <Timeline>
        {entries.map((entry) => {
          console.log(entry)
            return (
              <div key={entry.id}>
              <Timeline.Item>
               <Card
                title=""
                actions={[ <EditOutlined onClick={() => {edit(entry.id)}}/>,
                   <DeleteOutlined onClick={() => {remove(entry.id)}} />,]}
                >
                    <div className='cardhead'>
                      <h5 className="text-2xl text-gray-500">{`${entry.workplace} [${entry.position}]`}</h5>
                      <h5 className="text-gray-500">{`${entry.startDate}  -  ${entry.endDate? entry.endDate: 'Current'} `}</h5>
                    </div>
                    <ul className="pl-4 ml-2 list-disc">
                      {entry.tasks.split(/\n/).map((task)=>{
                        return(
                          <li className="text-md">{task}</li>
                        )
                      })}
                    </ul>
            </Card>
            </Timeline.Item>
            </div>
            )
        })}
        </Timeline>
      </div>
      :
       <div></div>}
      </div>
    )
      
  }


  export const AboutDisplay = (props) => {
      const { entries } = props;
      
      return(
        <>
        {entries.length>0? <div className="abouted">
            <div>
              <h1 className='text-6xl text-sky-600 mb-1'>{`${entries[0].firstName} ${entries[0].lastName}`}</h1>
            </div>
            <div className="inline-flex text-gray-400 text-lg m-0">
              <p className='pr-3'>{entries[0].email},</p>
              <p className='pr-3'>{entries[0].phone},</p>
              <p className='pr-3'>{entries[0].address},</p>
              <p className='pr-3'>{entries[0].age}</p>
            </div>

        </div>
        :<></>
        }
       </>
      )
       
    }

    export const EduDisplay = (props) => {
        const { entries, name, } = props;

        const remove = (id) => {
          props.handleDelete(id)
        }

        const edit = (id) => {
          props.handleEdit(id)
        }

       
        return(
          <div>
          {entries?  <div className="education">
            <h1 className="mt-4 bg-gray-200 p-2 text-sky-600 text-2xl">{name}</h1>
            {console.log(entries, 'edu')}
            <Timeline>
            {entries.map((entry) => {
              console.log(entry)
                return (
                  <div key={entry.id}>
                  <Timeline.Item>
                   <Card
                    title=""
                    actions={[ <EditOutlined onClick={() => {edit(entry.id)}}/>,
                       <DeleteOutlined onClick={() => {remove(entry.id)}} />,]}
                    >
                      <div>
                        <div className="cardhead">
                          <h5 className="text-xl text-gray-500">{entry.school}</h5>
                          <h5 className="text-gray-500">{`${entry.startDate} - ${entry.endDate? entry.endDate: 'Current'}`}</h5>
                        </div>
                        <h6 className="text-lg"> {entry.program}</h6>

                        </div>
                </Card>
                </Timeline.Item>
                </div>
                )
            })}
            </Timeline>
          </div>
        :
        <div></div>}
        </div>
        )
         
      }
