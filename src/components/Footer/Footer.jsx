import React from 'react'
import "./Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <>
    
    <div class="container my-5">
      <footer class="text-center text-lg-start">
        <h1>Martin Lazore</h1>
        <div class="container d-flex justify-content-center py-5">
          <a href='https://www.linkedin.com/in/martin-lazore/'target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
          <i class="fab fa-linkedin"></i>
          </button></a>
          <a href='https://github.com/mlazore?tab=repositories'target="_blank" rel="noopener noreferrer"><button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
          <i class="fab fa-github"></i>
          </button></a>
        </div>
      </footer>
    </div>
      </>
  )
}

export default Footer