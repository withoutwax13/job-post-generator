import { Grid, Typography, TextField, Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useState } from "react";

function Main() {
    const [companyName, setCompanyName] = useState('')
    const [jobTitLe, setJobTitle] = useState('')
    const [companyLocation, setCompanyLocation] = useState('')
    const [scope, setscope] = useState('')
    const [requireddocs, setrequireddocs] = useState('')
    const [worksetup, setworksetup] = useState('')
    const [startdate, setstartdate] = useState('')
    const [deadline, setdeadline] = useState('')
    const [contact, setcontact] = useState('')
    const [about, setabout] = useState('')
    const [skills, setskills] = useState('')

    const [generatedPost, setGeneratedPost] = useState('')

    const handleGenerate = () => {
        const requestOptions = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + process.env.REACT_APP_OPEN_API_KEY
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: `
                    You are a creative and witty Human Resource staff and you will create a well-crafted, creative, and witty job post in less than or equal to 1000 characters. 
                    The job post must contain all these details below if possible. 
                    Make it professionally written and structured, don't copy paste it. And add a witty pun or joke related to the job position at the start.
                    Add "\n" for linebreaks.
    
                        -	Name of Company: ${companyName}
                        -	Job Title/Position: ${jobTitLe}
                        -	Company Location: ${companyLocation}
                        -	Hiring within a specific location or not: ${scope}
                        -	Mandatory skills and years of experience with those skills: ${skills}
                        -	Remote or on-site or hybrid: ${worksetup}
                        -	Expected start date: ${startdate}
                        -	Application deadline: ${deadline}
                        -	Contact information: ${contact}
                        -	Files needed for application (resume, cover letter, etc.): ${requireddocs}
                        -	Company information: ${about}
                        -	Diversity and Inclusion statement: Concise and clear but make it sound noble and highlight the company.
    
                    If there's no data beside the details above, just don't include it.
                
                `,
                max_tokens: 1000,
                temperature: 0.9,
            })
          };
          fetch('https://api.openai.com/v1/completions', requestOptions)
              .then(response => response.json())
              .then(data => {
                setGeneratedPost(data.choices[0].text)
            }).catch(err => {
                alert("Out of token. This is a free trial. Apologies.")
                console.log(err)
            });
        }
    const handleClear = () => {
        setCompanyName('')
        setCompanyLocation('')
        setJobTitle('')
        setscope('')
        setrequireddocs('')
        setworksetup('')
        setstartdate('')
        setdeadline('')
        setcontact('')
        setabout('')
        setskills('')
        setGeneratedPost('')
    }

    return (
        <Stack>
            <Box sx={{marginTop: 5}}>
                <Typography variant="h6" component="p" textAlign={'center'}>
                    Introducing our <span style={{color: "#F56A4D"}}>Job Post Generator</span> - a user-friendly app that makes creating job posts a breeze, powered by GPT-3, our lord and saviour. 
                </Typography>
                <Typography variant="h6" component="p" textAlign={'center'}>
                    Simply input the necessary details and let our technology craft a creative and effective job listing for you. 
                </Typography>
                <Typography variant="h6" component="p" textAlign={'center'}>
                    No more struggling with writing job posts, our app will do it for you with ease. 
                </Typography>
            </Box>
            <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-start"
            >
                <Grid item sx={{marginTop: 5}}>
                    <Box>
                        <Stack sx={{marginTop: 4}}>
                            <Grid
                                container
                                direction="row"
                            >
                                <Grid item sx={{marginX: 1}}>
                                    <TextField id="outlined-basic" label="Company Name" variant="outlined" value={companyName} onChange={e=>setCompanyName(e.target.value)}/>
                                </Grid>
                                <Grid item sx={{marginX: 1}}>
                                    <TextField id="outlined-basic" label="Job Title" variant="outlined" value={jobTitLe} onChange={e=>setJobTitle(e.target.value)}/>
                                </Grid>
                                <Grid item sx={{marginX: 1}}>
                                    <TextField id="outlined-basic" label="Company Location" variant="outlined" value={companyLocation} onChange={e=>setCompanyLocation(e.target.value)}/>
                                </Grid>
                            </Grid>
                        </Stack>
                        <Stack sx={{marginTop: 4}}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid item sx={{marginX: 1}}>
                                    <TextField id="outlined-basic" label="Scope (e.g. within USA)" variant="outlined" value={scope} onChange={e=>setscope(e.target.value)}/>
                                </Grid>
                                <Grid item sx={{marginX: 1}}>
                                    <TextField id="outlined-basic" label="Required documents (e.g. resume and cover letter)" variant="outlined" value={requireddocs} onChange={e=>setrequireddocs(e.target.value)}/>
                                </Grid>
                                <Grid item sx={{marginX: 1}}>
                                    <TextField id="outlined-basic" label="Remote/On-site/Hybrid" variant="outlined" value={worksetup} onChange={e=>setworksetup(e.target.value)}/>
                                </Grid>
                            </Grid>
                        </Stack>
                        <Stack sx={{marginTop: 4}}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid item sx={{marginX: 1}}>
                                    <TextField id="outlined-basic" label="Expected Start Date" variant="outlined" value={startdate} onChange={e=>setstartdate(e.target.value)}/>
                                </Grid>
                                <Grid item sx={{marginX: 1}}>
                                    <TextField id="outlined-basic" label="Application Deadline" variant="outlined" value={deadline} onChange={e=>setdeadline(e.target.value)}/>
                                </Grid>
                                <Grid item sx={{marginX: 1}}>
                                    <TextField id="outlined-basic" label="Contact Email/Phone Number" variant="outlined" value={contact} onChange={e=>setcontact(e.target.value)}/>
                                </Grid>
                            </Grid>
                        </Stack>
                        <Stack sx={{marginTop: 4}}>
                            <TextField id="outlined-basic" label="About your company" variant="outlined" multiline minRows={3} value={about} onChange={e=>setabout(e.target.value)}/>
                        </Stack>
                        <Stack sx={{marginTop: 4}}>
                            <TextField id="outlined-basic" label="Skills and minimum year(s) of experience required for each (e.g. ReactJS 2 years, NodeJS 3 years)" variant="outlined" multiline minRows={3} value={skills} onChange={e=>setskills(e.target.value)}/>
                        </Stack>
                    </Box>
                    <Box textAlign={'end'} sx={{marginTop: 3}}>
                        <Button onClick={handleGenerate}>Generate</Button>
                        <Button onClick={handleClear}>Clear</Button>
                    </Box>
                </Grid>
                <Grid item sx={{marginTop: 10}}>
                    <Box width='100vh'>
                        <Typography variant="h6" component="p" noWrap={false} fontStyle="italic">
                            {generatedPost === '' ? 'The generated job post will be displayed here.' : generatedPost}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Main;