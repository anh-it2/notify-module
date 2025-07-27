'use client'

import React, { useEffect, useState } from 'react'

const SendNotifyBtn = () => {

    const [form, setForm] = useState({
        title: '',
        body: '',
        imageUrl:'',
        deviceToken: '',
        customField: '',
    })
    const [token, setToken] = useState('')

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const sendNotify = async (token, e) => {
        e.preventDefault()
        await fetch('https://notify-app-cj9d.onrender.com/notifications/send-to-device',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                title: form.title,
                body: form.body,
                imageUrl: form.imageUrl,
                deviceToken: token
            })
        })
    }

    // useEffect(() =>{
    //     const fetchToken = async () => {

    //         const messaging = getMessaging(app)
    //         const t = await generateToken(messaging)
    //         setToken(t)
    //     }
    //     fetchToken()
    // },[])

  return (
    <form>
        <input name='title' placeholder='tiêu đề' value={form.title} onChange={handleChange}/>
        <input name='body' placeholder='nội dung' value={form.body} onChange={handleChange}/>
        <input name='imageUrl' placeholder='đường dẫn ảnh' value={form.imageUrl} onChange={handleChange}/>
        <input name='customField' placeholder='customField' value={form.customField} onChange={handleChange}/>
        <button onClick={(e) => sendNotify(token, e)}>Gửi thông báo</button>
    </form>
  )
}

export default SendNotifyBtn