import { useParams, Link as RouteLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { useMediaQuery } from 'react-responsive'
import { Link } from "react-router-dom"
import {FacebookShareButton, PinterestShareButton, TwitterShareButton} from "react-share"
import {BiHorizontalLeft, BiHorizontalRight} from "react-icons/bi"
import { Rating, Checkbox, SvgIcon } from '@mui/material'
import { Helmet } from "react-helmet"
import Navbar from "./Navbar"
import Footer from "./Footer"
import commentIcon from "../assets/commentIcon.png"
import arrowRight from "../assets/Allarticlesarrow.png"
import arrowRightIntro from "../assets/arrowRightIntro.png"
import twitter from "../assets/twShare.png"
import facebook from "../assets/fbShare.png"
import pinterest from "../assets/pintShare.png"
import closeButton from "../assets/closebutton.png"
import paperPlane from "../assets/PaperPlane.png"
import paperPlaneBlack from "../assets/PaperPlaneBlack.png"



export default function SingleArticlePage({articles}) {

    const labelsForArticleReview = [
        {
            id:1,
            labelTitle: "Inspiring",
        },
        {
            id:2,
            labelTitle: "Easy to read",
        },
        {
            id:3,
            labelTitle: "Motivational",
        },
        {
            id:4,
            labelTitle: "Interesting",
        },
        {
            id:5,
            labelTitle: "Practical",
        },
        {
            id:6,
            labelTitle: "Informational",
        },
        {
            id:7,
            labelTitle: "Impractical",
        },
        {
            id:8,
            labelTitle: "Unconvincing",
        },
        {
            id:9,
            labelTitle: "Incorrect",
        },
        {
            id:10,
            labelTitle: "Confusing"
        },
        {
            id:11,
            labelTitle: "Complicated",
        }
    ]


    const [selectedLabels, setSelectedLabels] = useState([])

    const handleLabelClick = (labelID) => {
        if (selectedLabels.includes(labelID)){
            setSelectedLabels(selectedLabels.filter((id) => id !== labelID))
        }else{
            setSelectedLabels([...selectedLabels, labelID])
        }

       
    }

    
    const isTabletAboutMe = useMediaQuery({query: '(max-width: 768px )'})
    const isTablet = useMediaQuery({query: '(min-width: 768px )'})
    const isLaptop = useMediaQuery({query: '(min-width: 1024px )'})
    const isLaptopXl = useMediaQuery({query: '(min-width: 1440px)'})
    const isDesktop = useMediaQuery({query: '(min-width: 1536px)'})

 
    const [closeSideBar, setCloseSideBar] = useState(false)

    const [hoverOnPaperPlane, setHoverOnPaperPlane] = useState(false)
    const [clickOnPaperPlane, setClickOnPaperPlane] = useState(false) 
    const iconStyles = 'sm:px-[1px] xl:p-[3px] m-[-10px] xl:m-[-5px]'
    const iconStyles2 = 'sm:px-[1px] xl:p-[5px] m-[-10px] xl:m-[-10px]'

    
    const PaperPlaneIconForReviews = (props) => (
        <SvgIcon {...props}   className={iconStyles2}>
            <svg viewBox="0 0 16 16" fill="none">
            <path d="M14.3333 7.66667V12.6667C14.3333 13.1087 14.1577 13.5326 13.8452 13.8452C13.5326 14.1577 13.1087 14.3333 12.6667 14.3333H2.66667C2.22464 14.3333 1.80072 14.1577 1.48816 13.8452C1.17559 13.5326 1 13.1087 1 12.6667V2.66667C1 2.22464 1.17559 1.80072 1.48816 1.48816C1.80072 1.17559 2.22464 1 2.66667 1H10.1667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
       </SvgIcon>
      );
    
    
    const PaperPlaneIcon = (props) => (
        <SvgIcon {...props}   className={iconStyles}>
            <svg viewBox="0 0 16 16" fill="none">
            <path d="M14.3333 7.66667V12.6667C14.3333 13.1087 14.1577 13.5326 13.8452 13.8452C13.5326 14.1577 13.1087 14.3333 12.6667 14.3333H2.66667C2.22464 14.3333 1.80072 14.1577 1.48816 13.8452C1.17559 13.5326 1 13.1087 1 12.6667V2.66667C1 2.22464 1.17559 1.80072 1.48816 1.48816C1.80072 1.17559 2.22464 1 2.66667 1H10.1667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
       </SvgIcon>
      );
      
      const PaperPlaneBlackIcon = (props) => (
        <SvgIcon {...props} className={iconStyles}>
          <path d="M12.07 11.365l1.588-1.588-1.06-1.062-12.073 12.073c1.234 1.426 3.036 2.313 5.2 2.313 4.737 0 8.603-3.866 8.603-8.603 0-.851-.123-1.675-.354-2.456l1.613-1.613-5.315-5.314zm1.498-2.637c.773-.257 1.598-.39 2.452-.39 4.563 0 8.438 3.09 8.438 8.438 0 .855-.134 1.68-.39 2.453l1.588 1.588-1.057 1.062-6.928-6.927zm-7.24 8.968c-.082-.029-2.147-.76-3.31-1.91-.148-.147-.243-.337-.243-.545 0-.452.367-.82.82-.82.21 0 .4.094.547.24 1.068 1.068 2.013 1.407 2.143 1.465.11.043.232.063.357.063.28 0 .545-.134.706-.36.176-.254.422-.729.59-1.167.129-.28.19-.534.19-.832 0-1.155-.933-2.088-2.087-2.088-.111 0-.217.019-.328.04-.417.092-.827.294-1.168.59-.427.296-.81.664-1.138 1.09-.163.16-.24.37-.24.59 0 .563.457 1.02 1.02 1.02 .222 0 .431-.078.59-.22 .154-.126 1.31-1.044 2.28-2.028-.9-1.695-1.86-2.912-2.102-3.173-.027-.032-.068-.057-.108-.057-.059 0-.108.05-.108.11 0 .13 1.116 1.205 2.812 2.101 .92-.983 2.075-1.902 2.23-2.027 .157-.138.36-.22.578-.22 .563 0 1.02.457 1.02 1.02 0 .228-.082.438-.22.594-.27.33-.61.712-1.038 1.108-.322.38-.693.753-1.108 1.08z" />
        </SvgIcon>
      );




    const[openWriteCommentWindow, setOpenWriteCommentWindow] = useState(false)

    const {id} = useParams()

    const article = articles.find((article) =>  article.id === Number(id))
    const otherArticles = articles.filter((article) => article.id !== Number(id) )
    

    const currentURL = `peterbruncik.com/articles/${id}`

    const [hideNameInput, setHideNameInput] = useState(false)


    const [name, setName] = useState("")
    const [rating, setRating] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [comment, setComment] = useState("")
    const [nameErrorMessage, setNameErrorMessage] = useState("")
    const [commentErrorMessage, setCommentErrorMessage] = useState("")
    const [nameError, setNameError] = useState(false)
    const [commentError, setCommentError] = useState(false)

    const handleAnonymousCheckboxCLick = () => {
        setName("Anonymous")        
    }


    const handleRatingChange = (event, newRating) => {
    setRating(newRating)
    setIsModalOpen(true)
    };

    const handleCloseReviewWindow = () => {
        setIsModalOpen(false)
        setHideNameInput(false)
        setRating(0)
        setName('')
        setComment('')
        setSelectedLabels([])
        setNameErrorMessage('')
        setCommentErrorMessage('')
        setNameError(false)
        setCommentError(false)
    }

    const handleCloseCommentWindow = () => {
        setOpenWriteCommentWindow(false)
        setHideNameInput(false)
        setName('')
        setComment('')
        setNameErrorMessage('')
        setCommentErrorMessage('')
        setNameError(false)
        setCommentError(false)
    }

    const handleSaveRating = () => {
    console.log('Name', name)
    console.log('Rating:', rating)
    console.log('Comment:', comment)
    console.log('Selected Label:', selectedLabels)

    if (name === "") {
        setNameErrorMessage("Please insert name!");
        setNameError(true);
    } else {
        setNameErrorMessage("");
        setNameError(false);
    }  
    if (comment === "" && selectedLabels.length === 0) {
        setCommentErrorMessage("Please insert comment!");
        setCommentError(true);
    } else {
        setCommentErrorMessage("");
        setCommentError(false);
    } 
    if (name !== "" && comment !== "") {
        handleCloseReviewWindow();
    } 



    }

    const handleSaveComment = () => {
        console.log('Name', name)
        console.log('Rating:', rating)
        console.log('Comment:', comment)

        if (name === "") {
            setName("Please insert name!");
            setNameError(true);
        } else {
            setNameErrorMessage("");
            setNameError(false);
        }  
        if (comment === "") {
            setCommentErrorMessage("Please insert comment!");
            setCommentError(true);
        } else {
            setCommentErrorMessage("");
            setCommentError(false);
        } 
        if (name !== "" && comment !== "") {
            handleCloseCommentWindow();
        } 
    }


    useEffect(()=>{
        
        const handleCLickOutsideReviewWindow = (event) => {
            const reviewWindow = document.getElementById("reviewWindow")
            const reviewWindowTrigger = document.getElementById("reviewWindowTrigger")

            if(reviewWindow && reviewWindowTrigger && !reviewWindow.contains(event.target) && !reviewWindowTrigger.contains(event.target)){
                handleCloseReviewWindow()
            }
        }


        window.addEventListener('click', handleCLickOutsideReviewWindow)

        return ()=>{ 
            window.removeEventListener('click', handleCLickOutsideReviewWindow)
        }
        

    }, [])






    useEffect(()=>{
        
         const handleClickOutsideCommentWindow = (event) => {
            const commentWindow = document.getElementById("commentWindow")
            const triggerCommentWindow = document.getElementById("triggerCommentsWindow")

            if(commentWindow && triggerCommentWindow && !triggerCommentWindow.contains(event.target) && !commentWindow.contains(event.target)){
                handleCloseCommentWindow()
            }
        }


        window.addEventListener('click', handleClickOutsideCommentWindow)

        return () =>{
            window.removeEventListener('click', handleClickOutsideCommentWindow)
        }
    }, [])



return (
    <>
    <Helmet>
        <title>{article.title}</title>
        <link rel="icon" type="image/svg+xml" href="/articles.png" />
    </Helmet>

    <Navbar/>
    {/*Main container*/}
    <div className={`${closeSideBar ? "2xl:max-w-[1680px] max-w-[1380px] mx-auto grid-flow-col grid-cols-2 xl:gap-x-20 md:gap-x-10 gap-x-3 mt-[120px] grid 2xl:pl-20 lg:pl-20 sm:pl-10 px-7" : "2xl:max-w-[1680px] max-w-[1380px] mx-auto grid-flow-col grid-cols-2 xl:gap-x-20 md:gap-x-10 gap-x-3 mt-[120px] grid 2xl:pl-20 lg:pl-20 sm:pl-10 pl-4"}`}>



        {/*Article container*/}
        <div className="2xl:max-w-[1100px] col-span-2 xl:mt-0 sm:mt-[-40px] mt-[-120px]">
            <div className="col-span-2">
            <div className="flex justify-start items-center space-x-4 mt-16 font-regular  xl:text-[12px] md:text-[10px] sm:text-[9px] text-[8px]">
                <div>16.AUGUST 2023, 12:45 </div>
                <div className="text-gray-400">Reading time: 2:00</div> {/*npm modul na zobrazovanie casu -> date-fns*/}
            </div>

            <div className="xl:text-6xl lg:text-5xl sm:text-[28px]  text-3xl xl:my-6 md:my-4 sm:my-3 my-4 font-bold">{article.title}</div>

            <div className=" flex justify-start items-center sm:space-x-4 space-x-2 xl:mt-10 xl:text-lg sm:text-[13px] text-[11px]">
                <div className="xl:text-base md:text-[13px] text-[11px] font-spectral">written by </div>
                <strong className=" tracking-wider">PETER BRUNCIK</strong>
                <div className="border-l-[1px] border-black  uppercase" style={{ height: isLaptopXl ?'16px': isLaptop ? '11px' : isTablet ? '10px': '9px' }}></div>
                <div><strong>{article.label}</strong></div>
            </div>


        </div>



        {/*Article content*/}

        <div className="xl:mt-16 sm:mt-10 mt-7 xl:text-base sm:text-[13px] text-[14px] text-justify leading-6 md:pr-0 sm:pr-8 pr-5 ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula est nec sapien finibus eleifend. Nunc ut urna vitae augue ultrices eleifend ut quis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod purus id augue aliquet fermentum. Vestibulum vulputate, erat et molestie viverra, tellus mi aliquam enim, a dictum ipsum sapien nec dolor. Nulla nec mi augue. Vestibulum at felis magna. Nam at congue tellus.

Etiam id fermentum lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ornare feugiat magna id ullamcorper. In hac habitasse platea dictumst. Nulla in urna neque. Praesent quis vestibulum dui. Donec ut dolor ut tortor laoreet maximus vel sit amet enim. Nam rutrum odio nec augue venenatis suscipit. Sed rutrum maximus dui gravida hendrerit. Sed vitae tellus ultrices, tempus tortor ac, iaculis felis. Pellentesque in turpis ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut justo et felis dapibus placerat. Fusce faucibus tincidunt lectus quis malesuada. Maecenas tempus aliquam dui et condimentum.

Nam sed dictum lectus, ullamcorper fermentum enim. Aliquam efficitur nibh eu dolor vehicula, et auctor massa ornare. Praesent non elit tristique, euismod eros eu, egestas massa. Integer ut nunc sed quam scelerisque venenatis. Maecenas venenatis sapien ipsum, mattis mattis nunc lacinia mattis. Mauris vestibulum massa a ante imperdiet tincidunt. Cras accumsan id ex vel pulvinar. Vestibulum quis lectus non urna tempor tempor. Suspendisse nec velit at diam dignissim luctus.

Vestibulum pharetra scelerisque orci, ut scelerisque augue rutrum at. Vestibulum sed nulla in turpis fringilla elementum et a eros. Cras dictum, quam at vestibulum eleifend, metus tellus convallis massa, et tincidunt ipsum dui vel tortor. Pellentesque vulputate luctus turpis ut varius. Quisque id erat interdum, tincidunt velit ut, vehicula neque. Sed lorem odio, egestas ac iaculis ut, interdum sit amet felis. Fusce pellentesque magna sed nunc semper, ac imperdiet lectus mattis. Suspendisse eu rhoncus ante, ut sollicitudin nisl. Suspendisse potenti. Vivamus hendrerit pretium rutrum. Mauris massa libero, consectetur id lacus sed, molestie faucibus massa. Ut eu interdum mauris. In faucibus mauris ut ultrices sodales. Duis elementum faucibus metus ac molestie. Sed at quam libero. In leo magna, condimentum porta magna eget, pellentesque euismod diam.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula est nec sapien finibus eleifend. Nunc ut urna vitae augue ultrices eleifend ut quis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod purus id augue aliquet fermentum. Vestibulum vulputate, erat et molestie viverra, tellus mi aliquam enim, a dictum ipsum sapien nec dolor. Nulla nec mi augue. Vestibulum at felis magna. Nam at congue tellus.

Etiam id fermentum lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ornare feugiat magna id ullamcorper. In hac habitasse platea dictumst. Nulla in urna neque. Praesent quis vestibulum dui. Donec ut dolor ut tortor laoreet maximus vel sit amet enim. Nam rutrum odio nec augue venenatis suscipit. Sed rutrum maximus dui gravida hendrerit. Sed vitae tellus ultrices, tempus tortor ac, iaculis felis. Pellentesque in turpis ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut justo et felis dapibus placerat. Fusce faucibus tincidunt lectus quis malesuada. Maecenas tempus aliquam dui et condimentum.

Nam sed dictum lectus, ullamcorper fermentum enim. Aliquam efficitur nibh eu dolor vehicula, et auctor massa ornare. Praesent non elit tristique, euismod eros eu, egestas massa. Integer ut nunc sed quam scelerisque venenatis. Maecenas venenatis sapien ipsum, mattis mattis nunc lacinia mattis. Mauris vestibulum massa a ante imperdiet tincidunt. Cras accumsan id ex vel pulvinar. Vestibulum quis lectus non urna tempor tempor. Suspendisse nec velit at diam dignissim luctus.

Vestibulum pharetr tiam id fermentum lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ornare feugiat magna id ullamcorper. In hac habitasse platea dictumst. Nulla in urna neque. Praesent quis vestibulum dui. Donec ut dolor ut tortor laoreet maximus vel sit amet enim. Nam rutrum odio nec augue venenatis suscipit. Sed rutrum maximus dui gravida hendrerit. Sed vitae tellus ultrices, tempus tortor ac, iaculis felis. Pellentesque in turpis ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut justo et felis dapibus placerat. Fusce faucibus tincidunt lectus quis malesuada. Maecenas tempus aliquam dui et condimentum.

Nam sed dictum lectus, ullamcorper fermentum enim. Aliquam efficitur nibh eu dolor vehicula, et auctor massa ornare. Praesent non elit tristique, euismod eros eu, egestas massa. Integer ut nunc sed quam scelerisque venenatis. Maecenas venenatis sapien ipsum, mattis mattis nunc lacinia mattis. Mauris vestibulum massa a ante imperdiet tincidunt. Cras accumsan id ex vel pulvinar. Vestibulum quis lectus non urna tempor tempor. Suspendisse nec velit at diam dignissim luctus.

Vestibulum pharetra scelerisque orci, ut scelerisque augue rutrum at. Vestibulum sed nulla in turpis fringilla elementum et a eros. Cras dictum, quam at vestibulum eleifend, metus tellus convallis massa, et tincidunt ipsum dui vel tortor. Pellentesque vulputate luctus turpis ut varius. Quisque id erat interdum, tincidunt velit ut, vehicula neque. Sed lorem odio, egestas ac iaculis ut, interdum sit amet felis. Fusce pellentesque magna sed nunc semper, ac imperdiet lectus mattis. Suspendisse eu rhoncus ante, ut sollicitudin nisl. Suspendisse potenti. Vivamus hendrerit pretium rutrum. Mauris massa libero, consectetur id lacus sed, molestie faucibus massa. Ut eu interdum mauris. In faucibus mauris ut ultrices sodales. Duis elementum faucibus metus ac molestie. Sed at quam libero. In leo magna, condimentum porta magna eget, pellentesque euismod diam.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula est nec sapien finibus eleifend. Nunc ut urna vitae augue ultrices eleifend ut quis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod purus id augue aliquet fermentum. Vestibulum vulputate, erat et molestie viverra, tellus mi aliquam enim, a dictum ipsum sapien nec dolor. Nulla nec mi augue. Vestibulum at felis magna. Nam at congue tellus.

Etiam id fermentum lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ornare feugiat magna id ullamcorper. In hac habitasse platea dictumst. Nulla in urna neque. Praesent quis vestibulum dui. Donec ut dolor ut tortor laoreet maximus vel sit amet enim. Nam rutrum odio nec augue venenatis suscipit. Sed rutrum maximus dui gravida hendrerit. Sed vitae tellus ultrices, tempus tortor ac, iaculis felis. Pellentesque in turpis ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut justo et felis dapibus placerat. Fusce faucibus tincidunt lectus quis malesuada. Maecenas tempus aliquam dui et condimentum.

Nam sed dictum lectus, ullamcorper fermentum enim. Aliquam efficitur nibh eu dolor vehicula, et auctor massa ornare. Praesent non elit tristique, euismod eros eu, egestas massa. Integer ut nunc sed quam scelerisque venenatis. Maecenas venenatis sapien ipsum, mattis mattis nunc lacinia mattis. Mauris vestibulum massa a ante imperdiet tincidunt. Cras accumsan id ex vel pulvinar. Vestibulum quis lectus non urna tempor tempor. Suspendisse nec velit at diam dignissim luctus.

Vestibulum pharetr tiam id fermentum lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ornare feugiat magna id ullamcorper. In hac habitasse platea dictumst. Nulla in urna neque. Praesent quis vestibulum dui. Donec ut dolor ut tortor laoreet maximus vel sit amet enim. Nam rutrum odio nec augue venenatis suscipit. Sed rutrum maximus dui gravida hendrerit. Sed vitae tellus ultrices, tempus tortor ac, iaculis felis. Pellentesque in turpis ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut justo et felis dapibus placerat. Fusce faucibus tincidunt lectus quis malesuada. Maecenas tempus aliquam dui et condimentum.

Nam sed dictum lectus, ullamcorper fermentum enim. Aliquam efficitur nibh eu dolor vehicula, et auctor massa ornare. Praesent non elit tristique, euismod eros eu, egestas massa. Integer ut nunc sed quam scelerisque venenatis. Maecenas venenatis sapien ipsum, mattis mattis nunc lacinia mattis. Mauris vestibulum massa a ante imperdiet tincidunt. Cras accumsan id ex vel pulvinar. Vestibulum quis lectus non urna tempor tempor. Suspendisse nec velit at diam dignissim luctus.

Vestibulum pharetra scelerisque orci, ut scelerisque augue rutrum at. Vestibulum sed nulla in turpis fringilla elementum et a eros. Cras dictum, quam at vestibulum eleifend, metus tellus convallis massa, et tincidunt ipsum dui vel tortor. Pellentesque vulputate luctus turpis ut varius. Quisque id erat interdum, tincidunt velit ut, vehicula neque. Sed lorem odio, egestas ac iaculis ut, interdum sit amet felis. Fusce pellentesque magna sed nunc semper, ac imperdiet lectus mattis. Suspendisse eu rhoncus ante, ut sollicitudin nisl. Suspendisse potenti. Vivamus hendrerit pretium rutrum. Mauris massa libero, consectetur id lacus sed, molestie faucibus massa. Ut eu interdum mauris. In faucibus mauris ut ultrices sodales. Duis elementum faucibus metus ac molestie. Sed at quam libero. In leo magna, condimentum porta magna eget, pellentesque euismod diam.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vehicula est nec sapien finibus eleifend. Nunc ut urna vitae augue ultrices eleifend ut quis tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc euismod purus id augue aliquet fermentum. Vestibulum vulputate, erat et molestie viverra, tellus mi aliquam enim, a dictum ipsum sapien nec dolor. Nulla nec mi augue. Vestibulum at felis magna. Nam at congue tellus.

Etiam id fermentum lorem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas ornare feugiat magna id ullamcorper. In hac habitasse platea dictumst. Nulla in urna neque. Praesent quis vestibulum dui. Donec ut dolor ut tortor laoreet maximus vel sit amet enim. Nam rutrum odio nec augue venenatis suscipit. Sed rutrum maximus dui gravida hendrerit. Sed vitae tellus ultrices, tempus tortor ac, iaculis felis. Pellentesque in turpis ipsum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc ut justo et felis dapibus placerat. Fusce faucibus tincidunt lectus quis malesuada. Maecenas tempus aliquam dui et condimentum.

Nam sed dictum lectus, ullamcorper fermentum enim. Aliquam efficitur nibh eu dolor vehicula, et auctor massa ornare. Praesent non elit tristique, euismod eros eu, egestas massa. Integer ut nunc sed quam scelerisque venenatis. Maecenas venenatis sapien ipsum, mattis mattis nunc lacinia mattis. Mauris vestibulum massa a ante imperdiet tincidunt. Cras accumsan id ex vel pulvinar. Vestibulum quis lectus non urna tempor tempor. Suspendisse nec velit at diam dignissim luctus.

Vestibulum pharetr
        
        </div>

    

        {/*Review container*/}
        <div className="mt-[125px] flex justify-center">
            <div className="text-center">
                <h1 className="lg:text-2xl md:text-xl text-[14px] font-bold mb-2">How do you rate this article?</h1>
                <Rating
                id="reviewWindowTrigger"
                name="article-rating"
                value={rating}
                precision={0.5}
                onChange={handleRatingChange}
                style={{fontSize: isDesktop ? 62 : isLaptopXl ? 55 : isTablet ? 45: 40}}
                
            />

                { isModalOpen ?
                <div className="fixed top-0 left-0 bg-[#00000080] z-[10] h-[100vh] w-full flex justify-center items-center">
                    <div  id="reviewWindow" className="relative md:px-6 px-4 py-6 md:max-w-[750px] max-w-full lg:mx-0 md:mx-10 sm:mx-8 mx-4  bg-white rounded-[30px]">
                    <h1 className="text-left font-bold tracking-wider"> Rate this article</h1>

                    <div className="absolute top-4 right-4 w-[28px]"><img src={closeButton} className="duration-300 ease-out hover:scale-110" onClick={()=> handleCloseReviewWindow()}/></div>

                    <div className={`${hideNameInput ? "invisible" : "mt-7 md:text-xs text-[10px] text-left"}`}>
                        <p className="font-bold md:text-xs text-[10px]">Name:</p>
                        <div className={nameError ? "mt-1" : ""}>
                            <div className="text-red-600 sm:text-xs text-[11px pl-2">{nameErrorMessage}</div>
                            <input name="nameInput" id="singleArticleInput" placeholder="Your name" onChange={(e)=> setName(e.target.value)} className={`md:max-w-[325px] max-w-full md:rounded-[30px] rounded-[15px] xl:border-2 border-[1px] md:pt-[6px] md:pb-[3px] py-1 md:px-4 px-3 ${nameError ? " border-red-600 outline-0" : "border-gray-400 outline-0"}`}/>
                        </div>
                    </div>

                    <div className={`${hideNameInput ? "relative first-line:flex space-x-2" : "relative  flex space-x-2 mt-2"}`}>
                            <Checkbox icon={<PaperPlaneIconForReviews/>} checkedIcon={<PaperPlaneBlackIcon/>}  onClick={()=>{setHideNameInput(!hideNameInput), hideNameInput ? setName("")  : handleAnonymousCheckboxCLick() }}/>
                            <div className=" md:text-xs text-[10px] absolute bottom-[1px] left-4 ">Stay anonymous</div>
                    </div>
                    
                    <h1 className="text-left md:text-xs text-[10px] italic md:mt-3 mt-8 font-bold">Choose tags that fit this article:</h1>
                    
                    {/*Labels*/}
                    <div className="flex flex-row  flex-wrap auto-rows-fr md:space-x-2 space-x-1 my-2 md:text-sm text-xs">
                        {labelsForArticleReview.map( (label) =>
                            <div key={label.id} onClick={()=> handleLabelClick(label.id)} className={`cursor-pointer px-2 my-1 duration-300 ease-in-out rounded-2xl border ${selectedLabels.includes(label.id) ? "bg-black text-white border-black" : " border-black lg:hover:bg-black lg:hover:text-white active:bg-slate-600 active:border-slate-600"} `}>{label.labelTitle}</div>
                        )
                        }

                    </div>

                    <div className={commentError ? "" : "mt-4"}>
                        <div className="text-red-600 sm:text-xs text-[11px] text-left ml-3">{commentErrorMessage}</div>
                        <textarea placeholder="Send me your feedback..." id="singleArticleTextArea" onChange={(e)=> setComment(e.target.value)} className={`w-full md:rounded-[30px] rounded-[15px] mb-6 xl:border-2 border-[1px] md:py-2 py-[6px] md:px-4 px-3 md:text-xs text-[10px]  overflow-hidden ${commentError ?  "border-red-600 outline-0" :"border-gray-400 outline-0"}`}/>
                    </div>

                    <Rating name="read-only" value={rating} readOnly size="large" style={{ fontSize: isDesktop ? 70 : isTablet ? 50 : 40}} precision={0.5} />
            
                
                    {/*Send button rating*/}
                    <div className="text-right mt-2">
                        <button onClick={()=> {handleSaveRating(),setClickOnPaperPlane(true), setTimeout(function(){ setClickOnPaperPlane(false) }, 1000)}} variant="contained" onMouseEnter={()=> isLaptop ? setHoverOnPaperPlane(true) : setHoverOnPaperPlane(false)} onMouseLeave={()=> setHoverOnPaperPlane(false)} className=" bg-black lg:hover:bg-white lg:hover:text-black border-white border lg:hover:border-black active:bg-white active:text-black text-white ease-in-out duration-500  md:text-base text-sm md:mt-2 md:p-2 py-1 px-2 md:rounded-[30px] rounded-[20px]">
                            <div className="flex md:space-x-1 space-x-2 md:text-xs text-[11px] capitalize tracking-widest font-poppins">
                                <div className="underline underline-offset-2  my-auto font-bold">send</div>
                                <div className="my-auto"><img src={hoverOnPaperPlane || clickOnPaperPlane ? paperPlaneBlack : paperPlane} className="w-[11px]"/></div>
                            </div>
                        </button>
                    </div>  
                    
                    </div>
                </div>


                    :""

                    }
            </div>
            
        </div>





        {/*About the author - mobile res*/}
        { 
        isTabletAboutMe ?
        <div className="mt-20 pr-10">
        <h1 className="underline xl:underline-offset-[25px] sm:underline-offset-[15px] underline-offset-[12px] font-bold text-[#6F6F6F] decoration-gray-300 xl:text-base lg:text-sm sm:text-xs text-[10px]">ABOUT THE AUTHOR</h1>
            <div className=" mt-8  text-[12px]">
            <strong>Peter Brunčík</strong> writes about egestas dui at iaculis ultricies. Nunc pulvinar neque at tellus accumsan lobortis nec non est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam dignissim dapibus volutpat. Pellentesque iaculis sapien quam, ut fermentum enim scelerisque in. 
            <div className="mt-6 underline underline-offset-4  decoration-gray-300 xl:text-base lg:text-sm sm:text-[11px] text-[8px] flex space-x-1">
                <div className=" hover:cursor-pointer text-[11px]"><Link to="/about">Click here to learn more</Link></div> 
                
                <div className="my-auto">
                    <img src={arrowRightIntro} className="hover:scale-110 duration-100 ease-in-out xl:w-[26px] lg:w-[20px] sm:w-[18px] w-[12px]  hover:cursor-pointer"/>
                </div>
            </div>
        </div>


        <div className="my-12">
            <div className="flex space-x-3 my-auto">
                <h1 className="my-auto text-sm font-bold uppercase tracking-widest">share:</h1>
                <div className="flex space-x-3">
                    <PinterestShareButton url={currentURL} media={currentURL}><img src={pinterest} className="w-[20px] hover:scale-110 duration-300 ease-in-out"/></PinterestShareButton>
                    <TwitterShareButton url={currentURL} title="Check out this article!" via="peterbruncik"><img src={twitter} className="w-[20px] hover:scale-110 duration-300 ease-in-out"/></TwitterShareButton>
                    <FacebookShareButton url={currentURL} quote="Check out this article!"><img src={facebook} className="w-[20px] hover:scale-110 duration-300 ease-in-out"/></FacebookShareButton>
                </div>
            </div>
        </div>




        <div className="text-left text-[11px] pr-2">
        <div className="divide-y-2 divide-gray-300">
                <h1 className="uppercase mb-4 text-[#6F6F6F] font-bold">Read next</h1>
            <div className="divide-y-2 divide-gray-300 mt-2">
            {otherArticles.map((article)=> 
            <div key={article.id}>
            <RouteLink to={`/articles/${article.id}`}>
                <div className="xl:py-6 py-4">
                    {article.title}
                </div>
            </RouteLink>
            </div>
            )}
            </div>


            <div className="xl:pt-8 lg:pt-4 md:pt-4 pt-4 flex xl:space-x-4 md:space-x-3 space-x-2">
                <div className="font-bold  hover:cursor-pointer">
                    <Link to="/articles">All articles</Link>
                </div>

                <div className="my-auto">
                    <img src={arrowRight} className="xl:w-[22px] w-[14px] hover:scale-105 duration-100 ease-in-out"/>
                </div>
            
            </div>

        </div>

    </div>

    </div>

        : ""
            
        }




        {/*Comments container*/}
        <div className="md:mt-[200px] mt-[100px] xl:mb-[225px] md:mb-[150px] md:pr-0 pr-4">
            <h1 className="xl:text-4xl md:text-2xl text-xl font-bold">Comments and reviews</h1>

            <div className="flex space-x-6 uppercase mt-6 2xl:text-[19px] xl:text-lg text-xs xl:mt-8">
                <div className="my-auto ">
                    Comments
                </div>

                <div className="flex space-x-2 duration-500 ease-in-out  2xl:border-2 border-[1px] border-white   py-1 px-3 rounded-3xl lg:hover:border-black active:border-black hover:cursor-pointer ">
                    <div className="my-auto">
                        <img src={commentIcon}/>
                    </div>

                    <div id="triggerCommentsWindow" className="my-auto" onClick={() =>  setOpenWriteCommentWindow(true)}>
                        Write a comment
                    </div>

                </div>

                
           
            </div>


            <div className="xl:text-2xl md:text-[18px] text-base mt-8 font-bold">12 thougths on "{article.title}"</div>


            {/*Comments*/}
            <div className="mt-10">

                <div className="my-12">
                    <div>
                        <h1 className="font-bold xl:text-lg text-sm">Natalie B</h1>
                        <div className="xl:text-sm text-[11px] text-[#757575] mt-2">July 1, 2017 at 12:57 AM</div>
                    </div>

                    <div className="xl:pl-20 pl-8 pr-7">
                        <div className="border-2 border-gray-300 rounded-[10px] max-w-[480px] mt-6 xl:p-4 p-3">
                            <div className="xl:text-sm text-xs">
                            Thank you for the fantastic list! I've already read 'Meditations' by Marcus Aurelius, and now I have a list of books I want to dive into next. Stoicism is an inspiring philosophical movement for me.
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>


                 {/*Write a comment window*/}
                    {
                    openWriteCommentWindow ?
                    <div className="fixed top-0 left-0 bg-[#00000080] z-[10] h-[100vh] w-full flex justify-center items-center md:px-0 px-6">
                        <div className="relative bg-white rounded-[30px] py-6 md:px-8 px-4 w-[500px]" id="commentWindow">
                        
                        <div className="text-bold md:text-2xl text-xl font-bold">Write a comment</div>

                        <div className={`${hideNameInput ? "invisible" : "mt-7 md:text-base text-sm"}`}>
                            <p className="font-bold md:text-base text-xs">Name:</p>
                            <div className="text-red-600 sm:text-xs text-[11px] pl-2 mt-2">{nameErrorMessage}</div>
                            <input placeholder="Your name " id="singleArticleInput" name="nameInput"  onChange={(e)=> setName(e.target.value)} className={`w-full md:rounded-[30px] rounded-[15px]  xl:border-2 border-[1px] py-2 md:px-4 px-3 ${nameError ? "border-red-600 text-red-600 outline-0" : "border-gray-400 outline-0"}`}/>
                        </div>

                        <div className={`${hideNameInput ? "flex space-x-1 " : "flex space-x-1 mt-1"}`}>
                                <Checkbox icon={<PaperPlaneIcon/>} checkedIcon={<PaperPlaneBlackIcon/>}  onClick={()=>{setHideNameInput(!hideNameInput),  hideNameInput ? setName("")  : handleAnonymousCheckboxCLick()}}/>
                                <div className="font-bold md:text-base text-xs my-auto">Stay anonymous</div>
                        </div> 

                        <div className="mt-8 md:text-base text-sm">
                            <p className="font-bold md:text-base text-xs">Your thoughts on this article:</p>
                            <div className="sm:text-xs text-[11px] text-red-600 mt-2 pl-4">{commentErrorMessage}</div>
                            <textarea type="text" name="feedbackInput" id="singleArticleTextArea" placeholder="Write a comment... " className={`w-full md:rounded-[30px] rounded-[15px] h-[150px] xl:border-2 border-[1px] py-2 md:px-5 px-3  overflow-hidden ${commentError ?   "border-red-600 outline-0" :" border-gray-400 outline-0"}`} onChange={(e)=> setComment(e.target.value)} />
                        </div>

                        <div className="px-4 mt-8 xl:mt-12">
                        <div onMouseEnter={()=> setHoverOnPaperPlane(true)} onMouseLeave={()=> setHoverOnPaperPlane(false)} onClick={()=> {handleSaveComment(),setClickOnPaperPlane(true), setTimeout(function(){ setClickOnPaperPlane(false) }, 1000)}} className="w-full bg-black hover:bg-white hover:text-black border-white border hover:border-black active:bg-white active:text-black text-white ease-in-out duration-500 md:text-base text-sm p-2 rounded-[30px] flex space-x-2 justify-center">
                            <div className="font-bold underline-offset-2 underline">Send</div>
                            <div className="my-auto"><img src={hoverOnPaperPlane? paperPlaneBlack : paperPlane} className="w-[15px]"/></div>
                        </div>
                        </div>

                        <div className="absolute top-5 right-5" onClick={()=> handleCloseCommentWindow()}><img className="md:w-[30px] w-[24px] duration-300 ease-out hover:scale-110" src={closeButton}/></div>
                        </div>

                    </div>
                    : ""
                    }


        </div>
  




        

    
        {/*About the author side panel*/}
        {closeSideBar ? 
            
        <div className={`${isLaptop ? "hidden" : "text-bold absolute top-20 right-8 md:block hidden"}`} onClick={()=>setCloseSideBar(false)}><BiHorizontalLeft size={20}/></div>
        :
        
            <div className={`${closeSideBar ? "hidden" : "relative xl:max-w-[400px] lg:max-w-[300px] sm:max-w-[250px] max-w-[150px] xl:pr-20 xl:pl-12 lg:px-8 md:px-6 px-4 mx-auto text-left xl:border-l-2 border-l-[1px] mr-0 sm:mt-[-100px] mt-[-125px]  max-h-auto z-[0] md:block hidden"}`}>
            <div onClick={()=>setCloseSideBar(true)} className={`${isLaptop ? "hidden" : "absolute sm:left-2 sm:top-[60px] top-5"}`}>
                <BiHorizontalRight size={20}/>
            </div>
                <div className="lg:mt-[210px] md:mt-[150px] sm:mt-[180px] mt-[100px]">
                    <h1 className="underline xl:underline-offset-[25px] sm:underline-offset-[15px] underline-offset-[12px] font-bold text-[#6F6F6F] decoration-gray-300 xl:text-base lg:text-sm sm:text-xs text-[10px]">ABOUT THE AUTHOR</h1>
                    {/*About the author*/}
                    <div className="sm:mt-10 mt-8 xl:text-base lg:text-sm sm:text-xs text-[10px]">
                    <strong>Peter Brunčík</strong> writes about egestas dui at iaculis ultricies. Nunc pulvinar neque at tellus accumsan lobortis nec non est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam dignissim dapibus volutpat. Pellentesque iaculis sapien quam, ut fermentum enim scelerisque in. 
                    <div className="mt-6 underline underline-offset-4  decoration-gray-300 xl:text-base lg:text-sm sm:text-[11px] text-[8px] flex space-x-1">
                        <div className=" hover:cursor-pointer"><Link to="/about">Click here to learn more</Link></div> 
                        
                        <div className="my-auto">
                            <img src={arrowRightIntro} className="hover:scale-110 duration-100 ease-in-out xl:w-[26px] lg:w-[20px] sm:w-[18px] w-[12px]  hover:cursor-pointer"/>
                        </div>
                    </div>
                    </div>
                 </div>


                                    
                {/*Add banner*/}
                <div className="flex justify-center mt-[300px]">
                    <div className="w-[300px] h-[400px] bg-[#D9D9D9] text-[#6F6F6F] rounded-lg p-4 flex justify-center items-center text-xl">
                        
                        <span className="rotate-[-45deg]">
                            Miesto pre reklamu
                        </span>
                    </div>
                </div>



                {/*Share container*/}
                <div className="absolute bottom-[50%] grid justify-center text-center mt-[180px] mb-20">
                    <h1 className="xl:text-xl sm:text-base text-xs font-bold">Share this article</h1>
                    
                    <div className="flex xl:space-x-8 sm:space-x-6 space-x-2 xl:mt-6 mt-4">
                        <div><PinterestShareButton url={currentURL} media={currentURL}><img src={pinterest} className="xl:w-[58px] sm:w-[42px] w-[28px] hover:scale-110 duration-300 ease-in-out"/></PinterestShareButton></div>
                        <div><TwitterShareButton url={currentURL} title="Check out this article!" via="peterbruncik"><img src={twitter} className="xl:w-[58px] sm:w-[42px] w-[28px] hover:scale-110 duration-300 ease-in-out"/></TwitterShareButton></div>
                        <div><FacebookShareButton url={currentURL} quote="Check out this article!"><img src={facebook} className="xl:w-[58px] sm:w-[42px] w-[28px] hover:scale-110 duration-300 ease-in-out"/></FacebookShareButton></div>
                    </div>
                </div>




                {/*Read next container*/}

                <div className="absolute bottom-0 text-left xl:text-base sm:text-xs text-xs  xl:mb-[100px] md:mb-2">
                    <div className="divide-y-2 divide-gray-300">
                            <h1 className="uppercase mb-4 text-[#6F6F6F] font-bold">Read next</h1>
                        <div className="divide-y-2 divide-gray-300 mt-2">
                        {otherArticles.map((article)=> 
                        <div key={article.id}>
                        <RouteLink to={`/articles/${article.id}`}>
                            <div className="xl:py-6 py-4">
                                {article.title}
                            </div>
                        </RouteLink>
                        </div>
                        )}
                </div>


                            <div className="xl:pt-8 lg:pt-4 md:pt-4 pt-4 pb-[100px] flex xl:space-x-4 md:space-x-3 space-x-2">
                                <div className="font-bold  hover:cursor-pointer">
                                    <Link to="/articles">All articles</Link>
                                </div>

                                <div className="my-auto">
                                    <img src={arrowRight} className="xl:w-[22px] w-[14px] hover:scale-105 duration-100 ease-in-out"/>
                                </div>
                            
                            </div>

                        </div>

                    </div>



                </div>
    
         
        }
        
        

    </div>


    <Footer/>
    
    </>
    
  )
}
