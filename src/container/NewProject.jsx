import React, { useState,useEffect } from 'react';
import { FaChevronDown, FaCss3, FaHtml5, FaJs } from 'react-icons/fa6';
import { FcSettings } from 'react-icons/fc';
import SplitPane from 'react-split-pane';

import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';


const NewProject = () => {
    const [html, setHtml] = useState("")
    const [css, setCss] = useState("")
    const [js, setJs] = useState("")
    const [output, setOutput] = useState("")

    useEffect(() => {
        updateOutput()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [html, css, js]);

    const updateOutput = () => {
        const combineOutput = `
        <html>
        <head>
        <style>${css}</style>
        </head>
        <body>${html}</body>
        <script>${js}</script>
        </html>
        `;

        setOutput(combineOutput)
    }
    return <>
        <div className='w-full h-full flex flex-col items-start justify-start overflow-hidden'>
            {/* Alert section */}

            {/* Header Section */}

            {/* Coding Section */}

            <div className='w-screen h-screen flex pt-12 items-center justify-center'>

                {/* Horizontal section */}
                <SplitPane
                    split='horizontal'
                    minSize={100}
                    maxSize={-100}
                    defaultSize={"50%"}

                >
                    {/* top coding section */}
                    <SplitPane split='vertical' minSize={500}>
                        {/* html code here */}
                        <div className='w-full h-full flex flex-col items-start justify-start overflow-y-scroll'>
                            <div className='w-full flex items-center justify-between'>
                                <div className='bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500'>
                                    <FaHtml5 className='text-red-500 text-xl' />
                                    <p className='text-primaryText font-semibold '>HTML5</p>
                                </div>
                                {/* icons */}
                                <div className='cursor-pointer flex items-center justify-center gap5 px-4'>
                                    <FcSettings className='text-xl' />
                                    <FaChevronDown className='text-xl text-primaryText' />
                                </div>
                            </div>
                            <div className='w-full px-2'>
                                <CodeMirror
                                    value={html}
                                    height="600px"
                                    theme={"dark"}
                                    extensions={[javascript({ jsx: true })]}
                                    onChange={(value, viewUpdate) => {
                                        setHtml(value)
                                    }}
                                />
                            </div>
                        </div>

                        <SplitPane split='vertical' minSize={500}>
                            {/* CSS Code here */}
                            <div className='w-full h-full flex flex-col items-start justify-start overflow-y-scroll'>
                                <div className='w-full flex items-center justify-between'>
                                    <div className='bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500'>
                                        <FaCss3 className='text-sky-500 text-xl' />
                                        <p className='text-primaryText font-semibold '>CSS3</p>
                                    </div>
                                    {/* icons */}
                                    <div className='cursor-pointer flex items-center justify-center gap5 px-4'>
                                        <FcSettings className='text-xl' />
                                        <FaChevronDown className='text-xl text-primaryText' />
                                    </div>
                                </div>
                                <div className='w-full px-2'>
                                    <CodeMirror
                                        value={css}
                                        height="600px"
                                        theme={"dark"}
                                        extensions={[javascript({ jsx: true })]}
                                        onChange={(value, viewUpdate) => {
                                            setCss(value)
                                        }}
                                    />
                                </div>
                            </div>


                            <SplitPane split='vertical' minSize={500}>

                                {/* JS code here */}

                                <div className='w-full h-full flex flex-col items-start justify-start overflow-y-scroll'>
                                    <div className='w-full flex items-center justify-between'>
                                        <div className='bg-secondary px-4 py-2 border-t-4 flex items-center justify-center gap-3 border-t-gray-500'>
                                            <FaJs className='text-yellow-500 text-xl' />
                                            <p className='text-primaryText font-semibold '>JS</p>
                                        </div>
                                        {/* icons */}
                                        <div className='cursor-pointer flex items-center justify-center gap5 px-4'>
                                            <FcSettings className='text-xl' />
                                            <FaChevronDown className='text-xl text-primaryText' />
                                        </div>
                                    </div>
                                    <div className='w-full px-2'>
                                        <CodeMirror
                                            value={js}
                                            height="600px"
                                            theme={"dark"}
                                            extensions={[javascript({ jsx: true })]}
                                            onChange={(value, viewUpdate) => {
                                                setJs(value)
                                            }}
                                        />
                                    </div>
                                </div>
                            </SplitPane>

                        </SplitPane>

                    </SplitPane>

                    {/* bottom result section */}
                    <div className='bg-white w-full h-full' style={{ overflow: "hidden", height: "100%" }}>
                        <iframe 
                        title='Result'
                        srcDoc={output}
                        style={{border:"none",widows:"100%",height:"100%"}}
                        />
                    </div>
                </SplitPane>
            </div>
        </div>
    </>


}

export default NewProject;
