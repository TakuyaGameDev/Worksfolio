import React,{ useEffect, useState } from 'react'
import {ComposedChart, XAxis, YAxis, Tooltip, CartesianGrid, Bar} from 'recharts'
import '../../styles/aboutmeDetail.scss'

export const AboutMeDetail = React.memo((props:any) => {

  useEffect(() => {
    console.log("items")
    props.items.skills.etc.map((skill: string) => {
        console.log(skill)
    })
  },[props.items])

  const skillsData = (key: string) => {
    const data: Object[] = []
    props.items?.skills[key].forEach((skill: any) => {
        data.push({ name: skill.name, "level": skill.level })
    })
    return data
  }


  const skillsBar = (key: string) => {
    return (
        <ComposedChart
            width={600}
            height={280}
            layout="vertical"
            data={skillsData(key)}
            margin={{ top: 20, right: 10, bottom: 0, left: 40}}
        >
            <XAxis
                type="number"
                domain={[0, 5]}
                interval={0}
            />
            <YAxis
                type="category"
                dataKey="name"
            />
            <Tooltip />
            <CartesianGrid
                stroke="#f5f5f5"
            /> 
            <Bar
                dataKey="level"
                barSize={20}
                stroke="mediumseagreen"
                fillOpacity={0.6}
                fill="mediumseagreen"
            />
        </ComposedChart>
    )
  }

  const dataString = (key: string) => {
        const item: any[] = []
        {
            key === 'etc' ?
            props.items.skills.etc.map((skill: string) => {
                item.push(<div>■ { skill }</div>)
            }) :
            key === 'certificates' ?
            props.items.certificates.map((certificate: string) => {
                item.push(<div>■ { certificate }</div>)
            }) : ''
        }
        return item
    }

  return (
    <>
        <div className='detail-box'>
            <div className='career-box'>
                Career<span className="dli-chevron-down"></span>
                <div className='contents'>
                    {
                        props.items?.career?.map((item: any) => (
                            <>
                                <div className='date'>{item.date}</div>
                                <div className='content' style={{ whiteSpace:'pre-wrap' }}>{item.content}</div>
                            </>
                        ))
                    }
                </div>
            </div>
            <div className='skills-box'>
                Skills & Certificates<span className="dli-chevron-down"></span>
                <div className='contents'>
                    <div className='left-pane'>
                        <div className='languages'>
                            <div className='label'>
                                LANGUAGES
                            </div>
                            { skillsBar('languages') }
                        </div>
                        <div className='frameworks'>
                            <div className='label'>
                                FRAMEWORKS
                            </div>
                            { skillsBar('frameworks') }
                        </div>
                        <div className='db'>
                            <div className='label'>
                                DB
                            </div>
                            { skillsBar('DB') }
                        </div>
                        <div className='os'>
                            <div className='label'>
                                OS
                            </div>
                            { skillsBar('OS') }
                        </div>
                    </div>
                    <div className='right-pane'>
                        <div className='label'>Experienced tools & etc...</div>
                        <div className='etc'>  
                            { dataString('etc') }
                        </div>
                        <div className='label'>Certificates</div>
                        <div className='certificates'>
                            { dataString('certificates') }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
})

export default AboutMeDetail