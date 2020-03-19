// import React from 'react';
// import {
//     Button, Grid, TextField, 
//     Typography, Container
// } from '@material-ui/core';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { makeStyles } from '@material-ui/core/styles';





// const Styles = makeStyles(theme => ({
//   paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//   },
//   form: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//   },
//   submit: {
//     marginTop: theme.spacing(3),
//     marginBottom : theme.spacing(4)
//   },
//   mainBorder : {
//       borderRadius : '20px',
//       border : '2px solid black',
//       marginBottom : '20px'
//   }
// }));

// export default function SignUp() {
//   const classes = Styles();

//   return (
//     <Container maxWidth="xs" className = {classes.mainBorder}>
//       <CssBaseline />
//       <div className={classes.paper}>
//         <Typography component="h1" variant="h5">
//           Adding Staff Details
//         </Typography>
//         <form className={classes.form} noValidate>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 // autoComplete="name"
//                 name="firstName"
//                 variant="outlined"
//                 fullWidth
//                 id="firstName"
//                 label="Full Name"
//                 autoFocus
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 id="email"
//                 label="Email Address"
//                 name="email"
//                 autoComplete="email"
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 name="mobile"
//                 label="Mobile"
//                 type="Number"
//                 id="mobile"
//               />
//             </Grid>
//             <Grid item xs = {12}>
//                 <TextField
//                     variant = "outlined"
//                     fullWidth
//                     label = "Sales FY2019-2020"
//                     type = "text"
//                     id = "fy1920"
//                     />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="secondary"
//             className={classes.submit}
//           >
//             Submit Details
//           </Button>
//         </form>
//       </div>
//     </Container>
//   );
// }