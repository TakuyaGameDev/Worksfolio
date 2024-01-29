import React,{ useEffect, useState } from 'react'
import {RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Legend} from 'recharts'
import '../../styles/aboutmeDetail.scss'

export const AboutMeDetail = React.memo((props:any) => {

  useEffect(() => {
    console.log("items")
    console.log(props.items?.skills)
    skillsData()
  },[props.items])

  const skillsData = () => {
    const data: Object[] = []
    props.items?.skills['languages'].forEach((skill: any) => {
        data.push({
            subject: skill.name,
            A: skill.level,
            fullMark: 5
        })
    })
    return data
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
                    <div className='languages'>
                        <RadarChart outerRadius={90} width={730} height={250} data={skillsData()}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="subject" />
                            <PolarRadiusAxis angle={90} domain={[0,5]} />
                            <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                            <Legend />
                        </RadarChart>
                    </div>
                </div>
            </div>
            {/* <div className='left-pane'>
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
            <div className='right-pane'>
                Skills & Certificates<span className="dli-chevron-down"></span>
                <div className='contents'>
                    {
                        props.items?.skills['languages']?.map((item: any) => (
                            <div className='item'>{item}</div>
                        ))
                    }
                </div>
            </div> */}
        </div>
    </>
  )
})

export default AboutMeDetail