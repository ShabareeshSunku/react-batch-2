import React from 'react'

function DefaultExport() {
    return <h1>Hello Sanjib</h1>
}
function NamedExport() {
    return <h1>Hello Bangalore</h1>
}
export default DefaultExport

export { NamedExport }