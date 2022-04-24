import React from 'react'
import "./Footer.css"
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <>
    <div class="container my-5">
      <footer class="text-center text-lg-start">
        <div class="container d-flex justify-content-center py-5">
          <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
            <i class="fab fa-facebook-f"></i>
          </button>
          <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
            <i class="fab fa-youtube"></i>
          </button>
          <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
            <i class="fab fa-instagram"></i>
          </button>
          <button type="button" class="btn btn-primary btn-lg btn-floating mx-2">
            <i class="fab fa-twitter"></i>
          </button>
        </div>
        
  
          </footer>
        </div>
      </>
  )
}

export default Footer