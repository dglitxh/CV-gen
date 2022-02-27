import { EditOutlined, DeleteOutlined, ExclamationCircleOutlined} from '@ant-design/icons';
import { Timeline, Card, Modal } from 'antd'


export const ExpDisplay = (props) => {
    const { entries, name, actions } = props;

    const remove = (id) => {
      props.handleDelete(id)
    }

    const edit = (id) => {
      props.handleEdit(id)
    }

    function deleteWarn(id) {
      Modal.confirm({
        title: 'Sure you want to delete this?',
        icon: <ExclamationCircleOutlined />,
        okText: 'delete',
        okType: 'danger',
        content: (
          "items deleted can't be restored"
        ),
        onOk() {
          remove(id)
          console.log('deleted exp entry')
        },
        onCancel( ){
          console.log('cancelled delete')
        }
      });
    }

    return(
      <div>
      {entries? <div className="experience">
        <h1 className="mt-4 bg-gray-200 p-2 text-sky-600 text-2xl">{name}</h1>
        <Timeline>
        {entries.map((entry) => {
            return (
              <div key={entry.id}>
              <Timeline.Item>
               <Card
                title=""
                actions={actions?[ <EditOutlined onClick={() => {edit(entry.id)}}/>,
                   <DeleteOutlined onClick={() => {deleteWarn(entry.id)}} />,]:null}
                >
                    <div className='cardhead'>
                      <h5 className="text-2xl text-gray-500">{`${entry.workplace} [${entry.position}]`}</h5>
                      <h5 className="text-gray-500">{`${entry.startDate}  -  ${entry.endDate? entry.endDate: 'Current'} `}</h5>
                    </div>
                    <ul className="pl-4 ml-2 list-disc">
                      {entry.tasks.split(/\n/).map((task)=>{
                        return(
                          <li className="text-lg">{task}</li>
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
      const { entries, actions } = props;


      const edit = (id) => {
        props.handleEdit(id)
      }


      return(
        <>
        {entries.length>0? <div className="abouted">
            <div className='edit-about'>
              <h1 className='text-6xl text-sky-600 mb-1'>
                {`${entries[0].firstName} ${entries[0].lastName}`}
              </h1>
              {actions?<button onClick={() => {edit(entries[0].id)}} className='hover:text-sky-600'>
                <EditOutlined />
              </button>
              :<></>}
            </div>
            <div className="inline-flex text-gray-400 text-lg m-0">
              <p className='pr-3'>{entries[0].email},</p>
              <p className='pr-3'>{entries[0].phone},</p>
              <p className='pr-3'>{entries[0].address},</p>
              <p className='pr-3'>{entries[0].age}</p>
            </div>
            <div>
          {
            entries[0].summary? <div>
              <h1 className="mt-4 bg-gray-200 p-2 text-sky-600 text-2xl">
                Professional Summary
                </h1>
                <p className='px-2 text-lg'>{entries[0].summary}</p>
            </div>
            :
            <></>
          }
          </div>
        </div>
        :<></>
        }
       </>
      )

    }

    export const EduDisplay = (props) => {
        const { entries, name, actions } = props;

        const remove = (id) => {
          props.handleDelete(id)
        }

        const edit = (id) => {
          props.handleEdit(id)
        }
        function deleteWarn(id) {
          Modal.confirm({
            title: 'Sure you want to delete this?',
            icon: <ExclamationCircleOutlined color='red'/>,
            okText: 'delete',
            okType: 'danger',
            content: (
              "items deleted can't be restored"
            ),
            onOk() {
              remove(id)
              console.log('deleted edu entry')
            },
            onCancel( ){
              console.log('cancelled delete')
            }
          });
        }

        return(
          <div>
          {entries?  <div className="education">
            <h1 className="mt-4 bg-gray-200 p-2 text-sky-600 text-2xl">{name}</h1>

            <Timeline>
            {entries.map((entry) => {

                return (
                  <div key={entry.id}>
                  <Timeline.Item>
                   <Card
                    title=""
                    actions={actions?[ <EditOutlined onClick={() => {edit(entry.id)}}/>,
                       <DeleteOutlined onClick={() => {deleteWarn(entry.id)}} />,]: null}
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
