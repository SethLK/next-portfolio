"use client"

import { useState, useEffect } from 'react'
interface GitHubRepo {
    id: number;
    name: string;
    html_url: string;
}

export default function GitHubProjects(){
    const [repos, setRepos] = useState<GitHubRepo[]>([])

    useEffect(() =>{
        const fetchGitHubRepos = async () =>{
            try{
                const response = await fetch('https://api.github.com/users/SethLK/repos')
                if(!response.ok){
                    throw new Error('Failed to fetch GitHub repositories')
                }
                const repositories: GitHubRepo[] = await response.json()
                setRepos(repositories)
            }catch(error){
                console.log('Error fetching Github repos')
            }
        }
        fetchGitHubRepos()
    }, [])
    return (
            <div id="about-me" className="box flex">
                <div className="text m-5">
                    <h1 className="text-5xl"><a href="https://github.com/SethLK?tab=repositories" target='_blank'>Projects</a></h1>
                        <ul>
                            {repos.map((repo) => (
                            <li key={repo.id}>
                                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                                {repo.name}
                                </a>
                            </li>
                            ))}
                        </ul>
                </div>
            </div>
        )
}