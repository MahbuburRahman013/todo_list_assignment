import { useForm, Controller } from 'react-hook-form';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Link } from 'react-router-dom';
import { TextField, Button, Typography, Container, CssBaseline, Grid } from '@mui/material';
import { useContext } from 'react';
import { ContextProvider } from '../auth/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate, useLocation } from 'react-router-dom'


const Login = () => {
    const { handleSubmit, control } = useForm();
    const { signInUser, signInGoogle, signInFacebook } = useContext(ContextProvider);
    const navigate = useNavigate();
    const location = useLocation()


    const onSubmit = (data) => {

        signInUser(data.email, data.password)
            .then(result => {
                if (result) {
                    toast.success('SignIn Successfully');
                    location?.state ? navigate(location.state) :
                        navigate('/')
                }

            })
            .catch(error => {
                if (error.message) {
                    toast.error(error.message);
                }
            })

    };

    const handleGoogle = () => {

        signInGoogle()
            .then(result => {
                if (result) {
                    toast.success('SignIn Successfully');
                    location?.state ? navigate(location.state) :
                        navigate('/')
                }

            })
            .catch(error => {
                if (error.message) {
                    toast.error(error.message);
                }

            })
    }


    const handleFacebook = () => {

        signInFacebook()
            .then(result => {
                if (result) {
                    toast.success('SignIn Successfully');
                    location?.state ? navigate(location.state) :
                        navigate('/')
                }

            })
            .catch(error => {
                if (error.message) {
                    toast.error(error.message);
                }

            })
    }


    return (
        <div>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="mt-8">
                    <Typography component="h1" variant="h4" sx={{ fontWeight: "700", color: 'gray' }} className="text-center">
                        Sign in
                    </Typography>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Controller
                                    name="email"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Email Address"
                                            variant="outlined"
                                            fullWidth
                                            required
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Controller
                                    name="password"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <TextField
                                            {...field}
                                            label="Password"
                                            type="password"
                                            variant="outlined"
                                            fullWidth
                                            required
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ marginTop: "20px" }}
                        >
                            Sign In
                        </Button>
                        <div className='w-full border-b-2 border-gray-400 mt-5 text-center'>Or</div>
                        <Button
                            onClick={handleGoogle}
                            fullWidth
                            variant="outlined"
                            color="success"
                            sx={{ marginTop: "20px" }}
                        >
                            <span className='px-3'><GoogleIcon></GoogleIcon></span> Sign In With Google
                        </Button>
                        <Button
                            onClick={handleFacebook}
                            fullWidth
                            variant="outlined"
                            color="success"
                            sx={{ marginTop: "20px" }}
                        >
                            <span className='pr-2'><FacebookIcon></FacebookIcon></span>
                            Sign In With FaceBook
                        </Button>
                        <Grid container justifyContent="flex-end" className="mt-2">
                            <Grid item>
                                <Link to="/registration" className="text-blue-500 hover:underline">
                                    Dont have an account? Sign up
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default Login;