const FormLogin = () => {
   return (
      <form method="post" action="#" autoComplete="off">
         <div className="form-group form-material floating" data-plugin="formMaterial">
            <input type="email" className="form-control" name="email" />
            <label className="floating-label">Email</label>
         </div>
         <div className="form-group form-material floating" data-plugin="formMaterial">
            <input type="password" className="form-control" name="password" />
            <label className="floating-label">Password</label>
         </div>
         <div className="form-group clearfix">
            <div className="checkbox-custom checkbox-inline checkbox-primary checkbox-lg float-left">
               <input type="checkbox" id="inputCheckbox" name="remember" />
               <label htmlFor="inputCheckbox">Remember me</label>
            </div>
            <a className="float-right" href="forgot-password.html">Forgot password?</a>
         </div>
         <button type="submit" className="btn btn-primary btn-block btn-lg mt-40">Sign in</button>
      </form>
   )
}

export default FormLogin
