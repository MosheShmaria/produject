import React, { Component } from 'react'
 export default class Contect extends Component {
  render() {
    return (
      <div className="main">
      <form className="contect">
        <h1>יצירת קשר</h1>
        <p> שם מלא:</p>
        <input
          type="text"
        />
         <p>טלפון:</p>
        <input
          type="text"
        />
         <p>אימייל:</p>
        <input
          type="text"
        />
          <p>הודעה:</p>
        <input
          type="text"
        />
        <button>
          שלח
        </button>
      </form>
      </div>
    );
  }
 }