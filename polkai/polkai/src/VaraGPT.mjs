import { config } from './data/config.mjs'
import { YoutubeTranscript } from 'youtube-transcript'
import fs from 'fs'
import { Sitemap2Doc } from 'sitemap2docext'
import { Repos2Doc } from 'repos2doc'


export class VaraGPT {
    #config
 

    constructor() {
        this.#config = config
        console.log("loading config")
        //console.log(JSON.stringify(this.#config))
    }


    async start() {
        console.log("Current directory:", process.cwd());

        console.log( `Transscript` )
       // await this.getTranscripts()
        console.log()



        console.log( 'Sitemap' )
        await this.getSitemaps()
        console.log()



        console.log( 'Get Tutorials' )
        //await this.getTutorials()



        console.log( 'Get Vara' )
        //await this.#getVara()


        return true
    }


    async #getVara() {
        const cmds = [
            [ 'repos', 'varaRepos', 'Vara Repos' ],
            //[ 'other', 'otherRepos', 'Other Repos' ]
        ]

        for( const cmd of cmds ) {
            const [ key, pathKey ] = cmd 
            console.lo

            const repositories = this.#config[ key ]
                .filter( a => a['use'] === true )
                .map( a => a['repo'].replace( 'https://github.com/', '' ) )

            const r2d = new Repos2Doc( false )
            await r2d.getDocument( { 
                repositories,
                'name': key,
                'formats': [ 'md', 'txt', 'pdf' ],
                'destinationFolder': this.#config['paths'][ pathKey ]
            } )
        }

        return true
    }


    async getTutorials() {
        const { repositories, options } = this.#config['tutorials']
            .reduce( ( acc, a, index ) => {
                const repo = a['repo'].replace( 'https://github.com/', '' )
                acc['repositories'].push( repo )

                let path = ''
                path += this.#config['paths']['transcripts']
                path += `${index}.txt`
                console.log('reading ', path)
                const content = fs.readFileSync( path, 'utf-8' )
                acc['options'].push( {
                    'description': content 
                } )

                return acc
            }, { 'repositories': [], 'options': [] } )

        const r2d = new Repos2Doc( false )
        await r2d.getDocument( { 
            repositories,
            'name': 'tutorials',
            'formats': [ 'md', 'txt', 'pdf' ],
            'destinationFolder': this.#config['paths']['merge'],
            options
        } )

        return true
    }


    async getSitemaps() {
        const data = Object.entries( this.#config['sitemaps'] )

        const chunkSize = this.#config['meta']['sitemapChunkSize']
        const groups = data
            .map( ( a, i ) => i % chunkSize === 0 ? data.slice( i, i + chunkSize ) : null )
            .filter( a => a )

        for( let i = 0; i < groups.length; i++ ) {
            await Promise.all(
                groups[ i ]
                    .map( async( a, index ) => {
                        const [ key, value ] = a
                        const s2d = new Sitemap2Doc()
                        console.log('sitemap ' + key + ' - ' + value)
                        await s2d.getDocument( {
                            'projectName': key,
                            'sitemapUrl': value
                        } )
                    } )
            )
        }
        return true
    }


    async getTranscripts() {
        
        for( let i = 0; i < this.#config['tutorials'].length; i++ ) {
            console.log( `.` )
            const url = this.#config['tutorials'][ i ]['source']
            console.log( `url `,  url)
            const txt = await this.getTransscript( { url } )
            let path = ''
            console.log( `.`)
            path += this.#config['paths']['transcripts']
            console.log( `create directory `, path)
            fs.mkdir(path, { recursive: true }, (err) => {
                if (err) console.log( 'error creating directory: ', err)
                path += `${i}.txt`
                console.log( `path `,  path)
    
                fs.writeFileSync( path, txt, { flag: 'wx', encoding: 'utf-8'} )
            })
           
        }
    
        return true
    }


    async getTransscript( { url } ) {
        const response = await YoutubeTranscript
            .fetchTranscript( url )
        const result = response
            .map( a => a['text'] )
            .join( "\n" )
        return result
    }
}