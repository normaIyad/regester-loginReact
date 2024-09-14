import axios from "axios";
import { useFormik } from "formik"

export default function Login() {
    const formk = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: login,
        validate: values => {
            let errors = {};
            if (!values.email) {
                errors.email = 'Email is required';
            }
            if (values.email.length <= 10) {
                errors.email = 'Email is required';
            }
            if (!values.password) {
                errors.password = 'Password is required';
            }
            if (values.password.length <= 6) {
                errors.password = 'not valed Password';
            }
            return errors;
        }
    });
    async function login() {
        const { data } = await axios.post(`https://ecommerce-node4.onrender.com/auth/signin `, formk.values);
        console.log(data);
    }
    console.log(formk);
    return (
        <div className="container">
            <h2 className="mt-0 mb-3">Log in</h2>
            <form onSubmit={formk.handleSubmit}>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                        name='email' onChange={formk.handleChange} value={formk.email}
                        onBlur={formk.handleBlur}
                    />
                    <label htmlFor="floatingInput">Email address  </label>
                    {
                        formk.touched.email && formk.errors.email ? <div className="alert alert-danger" role="alert">
                            {formk.errors.email}
                        </div> : null  // if error show error message else hide it
                    }
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                        name='password' value={formk.password} onChange={formk.handleChange}
                        onBlur={formk.handleBlur}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                    {formk.touched.password && formk.errors.password ? <div className="alert alert-danger" role="alert">
                        {formk.errors.password}
                    </div> : null}
                </div>
                <div className="form-check">
                    <button type="submit" className="btn btn-primary btn-lg active mt-3 ml-0">Regester </button>
                </div>
            </form>
        </div>
    )
}
