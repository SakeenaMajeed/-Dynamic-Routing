import Link from 'next/link'
import React from 'react'

const StudentList = () => {
  return (
    <div>
        <h1>student list</h1>
        <ul>
            <li><Link href= "/studentlist/sakeena">sakeena</Link></li>
            <li><Link href= "/studentlist/manahil">manahil</Link></li>
            <li><Link href= "/studentlist/alishba">alishba</Link></li>
        </ul>
    </div>
  )
}

export default StudentList