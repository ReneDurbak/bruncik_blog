import {useParams, Link as RouteLink} from "react-router-dom"
import {useEffect, useState} from "react"
import {useMediaQuery} from 'react-responsive'
import {Link} from "react-router-dom"
import {FacebookShareButton, PinterestShareButton, TwitterShareButton} from "react-share"
import {BiHorizontalLeft, BiHorizontalRight} from "react-icons/bi"
import {Rating, Checkbox, SvgIcon} from '@mui/material'
import {Helmet} from "react-helmet"
import commentIcon from "../assets/commentIcon.png"
import arrowRight from "../assets/Allarticlesarrow.png"
import arrowRightIntro from "../assets/arrowRightIntro.png"
import twitter from "../assets/twShare.png"
import facebook from "../assets/fbShare.png"
import pinterest from "../assets/pintShare.png"
import closeButton from "../assets/closebutton.png"
import paperPlane from "../assets/PaperPlane.png"
import paperPlaneBlack from "../assets/PaperPlaneBlack.png"
import axios from "axios"
import DOMPurify from 'dompurify';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer";




export default function SingleArticlePage() {

  

    const labelsForArticleReview = [
        {
            id: 1,
            labelTitle: "Inspiring"
        },
        {
            id: 2,
            labelTitle: "Impractical"
        },
        {
            id: 3,
            labelTitle: "Motivational"
        },
        {
            id: 4,
            labelTitle: "Interesting"
        }, {
            id: 5,
            labelTitle: "Practical"
        }, {
            id: 6,
            labelTitle: "Informational"
        }, {
            id: 7,
            labelTitle: "Easy to read"
        }, {
            id: 8,
            labelTitle: "Unconvincing"
        }, {
            id: 9,
            labelTitle: "Incorrect"
        }, {
            id: 10,
            labelTitle: "Confusing"
        }, {
            id: 11,
            labelTitle: "Complicated"
        }
    ]


    const [selectedLabels, setSelectedLabels] = useState([])

    const handleLabelClick = (labelID) => {
        if (selectedLabels.includes(labelID)) {
            setSelectedLabels(selectedLabels.filter((id) => id !== labelID))
        } else {
            setSelectedLabels([
                ...selectedLabels,
                labelID
            ])
        }}

    const[showMoreLabels,setShowMoreLabels] = useState(false)
    const labelsToShow = showMoreLabels ? labelsForArticleReview : labelsForArticleReview.slice(0, 3);

    const isMobile = useMediaQuery({query: '(min-width: 640px)'})
    const isTabletAboutMe = useMediaQuery({query: '(max-width: 767px )'})
    const isTablet = useMediaQuery({query: '(min-width: 768px )'})
    const isLaptop = useMediaQuery({query: '(min-width: 1024px )'})
    const isLaptopXl = useMediaQuery({query: '(min-width: 1440px)'})
    const isDesktop = useMediaQuery({query: '(min-width: 1536px)'})


    const [closeSideBar, setCloseSideBar] = useState(false)

    const [hoverOnPaperPlane, setHoverOnPaperPlane] = useState(false)
    const [clickOnPaperPlane, setClickOnPaperPlane] = useState(false)
    const iconStyles = 'p-[5px] sm:p-[4px] lg:p-[3px] xl:p-[3px] mx-[-12px] sm:mx-[-10px] lg:mx-[-8px]'
    const iconStylesReviews = 'p-[6px] md:p-[5px] my-[-12px] mx-[-9px] md:my-[-11px] 2xl:my-[-10px] md:mx-[-10px]'


    const CheckboxIconForReviews = (props) => (
        <SvgIcon {...props}
            className={iconStylesReviews}>
            <svg viewBox="0 0 16 16" fill="none">
                <path d="M14.3333 7.66667V12.6667C14.3333 13.1087 14.1577 13.5326 13.8452 13.8452C13.5326 14.1577 13.1087 14.3333 12.6667 14.3333H2.66667C2.22464 14.3333 1.80072 14.1577 1.48816 13.8452C1.17559 13.5326 1 13.1087 1 12.6667V2.66667C1 2.22464 1.17559 1.80072 1.48816 1.48816C1.80072 1.17559 2.22464 1 2.66667 1H10.1667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </SvgIcon>
    );

    const CheckboxIconCheckedForReviews = (props) => (
        <SvgIcon {...props}
            className={iconStylesReviews}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.16666 6.83332L7.66666 9.33332L14.3333 2.66666" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.3333 7.66667V12.6667C14.3333 13.1087 14.1577 13.5326 13.8452 13.8452C13.5326 14.1577 13.1087 14.3333 12.6667 14.3333H2.66667C2.22464 14.3333 1.80072 14.1577 1.48816 13.8452C1.17559 13.5326 1 13.1087 1 12.6667V2.66667C1 2.22464 1.17559 1.80072 1.48816 1.48816C1.80072 1.17559 2.22464 1 2.66667 1H10.1667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </SvgIcon>
    );


    const CheckboxIcon = (props) => (
        <SvgIcon {...props}
            className={iconStyles}>
            <svg viewBox="0 0 16 16" fill="none">
                <path d="M14.3333 7.66667V12.6667C14.3333 13.1087 14.1577 13.5326 13.8452 13.8452C13.5326 14.1577 13.1087 14.3333 12.6667 14.3333H2.66667C2.22464 14.3333 1.80072 14.1577 1.48816 13.8452C1.17559 13.5326 1 13.1087 1 12.6667V2.66667C1 2.22464 1.17559 1.80072 1.48816 1.48816C1.80072 1.17559 2.22464 1 2.66667 1H10.1667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </SvgIcon>
    );

    const CheckboxIconChecked = (props) => (
        <SvgIcon {...props}
            className={iconStyles}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.16666 6.83332L7.66666 9.33332L14.3333 2.66666" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.3333 7.66667V12.6667C14.3333 13.1087 14.1577 13.5326 13.8452 13.8452C13.5326 14.1577 13.1087 14.3333 12.6667 14.3333H2.66667C2.22464 14.3333 1.80072 14.1577 1.48816 13.8452C1.17559 13.5326 1 13.1087 1 12.6667V2.66667C1 2.22464 1.17559 1.80072 1.48816 1.48816C1.80072 1.17559 2.22464 1 2.66667 1H10.1667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </SvgIcon>
    );


    const [openWriteCommentWindow, setOpenWriteCommentWindow] = useState(false)

    const [hideNameInput, setHideNameInput] = useState(false)


    const [name, setName] = useState("")
    const [rating, setRating] = useState(0)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [comment, setComment] = useState("")
    const [nameError, setNameError] = useState(false)
    const [commentError, setCommentError] = useState(false)

    const handleAnonymousCheckboxCLick = () => {
        setName("Anonymous")
    }

    const handleClickOnInput = () => {
        if (nameError === true) {
            document.getElementById("singleArticleInput").value = ""
        }
    }

    const handleClickOnTextArea = () => {
        if (commentError === true) {
            document.getElementById("singleArticleTextArea").value = ""
        }
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
        setNameError(false)
        setCommentError(false)
        document.getElementById("singleArticleInput").value = ""
        document.getElementById("singleArticleTextArea").value = ""
    }

    const handleCloseCommentWindow = () => {
        setOpenWriteCommentWindow(false)
        setHideNameInput(false)
        setName('')
        setComment('')
        setNameError(false)
        setCommentError(false)
        document.getElementById("singleArticleInput").value = ""
        document.getElementById("singleArticleTextArea").value = ""
    }

    const handleSaveRating = () => {
        console.log('Name', name)
        console.log('Rating:', rating)
        console.log('Comment:', comment)
        console.log('Selected Label:', selectedLabels)

        if (name === "") {
            document.getElementById("singleArticleInput").value = "Please insert name!"
            setNameError(true);
        } else {
            setNameError(false);
        }
        if (comment === "" && selectedLabels.length === 0) {
            document.getElementById("singleArticleTextArea").value = "Please write some text!"
            setCommentError(true);
        } else {
            setCommentError(false);
        }


        if (name !== "" && (comment !== "" || (comment === "" && selectedLabels.length !== 0))) {
            handleCloseReviewWindow();
        }


    }

    const handleSaveComment = () => {
        console.log('Name', name)
        console.log('Rating:', rating)
        console.log('Comment:', comment)

        if (name === "") {
            document.getElementById("singleArticleInput").value = "Please insert name!"
            setNameError(true);
        } else {
            setNameError(false);
        }
        if (comment === "") {
            document.getElementById("singleArticleTextArea").value = "Please write some text!"
            setCommentError(true);
        } else {
            setCommentError(false);
        }
        if (name !== "" && comment !== "") {
            handleCloseCommentWindow();
        }
    }


    useEffect(() => {

        const handleCLickOutsideReviewWindow = (event) => {
            const reviewWindow = document.getElementById("reviewWindow")
            const reviewWindowTrigger = document.getElementById("reviewWindowTrigger")

            if (reviewWindow && reviewWindowTrigger && ! reviewWindow.contains(event.target) && ! reviewWindowTrigger.contains(event.target)) {
                handleCloseReviewWindow()
            }
        }


        window.addEventListener('click', handleCLickOutsideReviewWindow)

        return() => {
            window.removeEventListener('click', handleCLickOutsideReviewWindow)
        }


    }, [])


    useEffect(() => {

        const handleClickOutsideCommentWindow = (event) => {
            const commentWindow = document.getElementById("commentWindow")
            const triggerCommentWindow = document.getElementById("triggerCommentsWindow")

            if (commentWindow && triggerCommentWindow && ! triggerCommentWindow.contains(event.target) && ! commentWindow.contains(event.target)) {
                handleCloseCommentWindow()
            }
        }


        window.addEventListener('click', handleClickOutsideCommentWindow)

        return() => {
            window.removeEventListener('click', handleClickOutsideCommentWindow)
        }
    }, [])


    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [otherArticles, setOtherArticles] = useState([]);

    useEffect(() => {
        const fetchArticle = async () => {
        try {
            const response = await axios.get(`http://localhost:4000/admin/articles/getArticle/${id}`);

            const fetchedArticle = response.data;
            console.log(fetchedArticle);
            setArticle(fetchedArticle);
        } catch (error) {
            console.error('Error fetching article:', error);
        }
        };

        fetchArticle();
    }, [id]);



    useEffect(() => {
        const fetchArticles = async () => {
          try {
            const response = await axios.get('http://localhost:4000/admin/articles/getAllArticles');

            const articles = response.data;
            setOtherArticles(articles.filter((a) => a._id !== id));
          } catch (error) {
            console.error('Error fetching articles:', error);

          }
        };
    
        fetchArticles();
      }, [id]);


    const currentURL = `peterbruncik.com/articles/${id}`

    if (article === null) {
        return <p className="py-20">Loading...</p>;
    }



    return (
        <>
        <Helmet>
            <title>{
                article.title
            }</title>
            <link rel="icon" type="image/svg+xml" href="/articles.png"/>
        </Helmet>

        <Navbar/>
        {/*Main container*/}
        <div className={
  `${
    isTabletAboutMe 
      ? "max-w-[1380px] mx-auto grid-flow-col grid-cols-2 gap-x-3 mt-[120px] grid sm:px-10 px-4" 
      : (closeSideBar 
          ? "2xl:max-w-[1680px] max-w-[1380px] mx-auto grid-flow-col grid-cols-2 xl:gap-x-20 md:gap-x-10 gap-x-3 mt-[120px] grid 2xl:pl-20 lg:pl-20 sm:pl-10 px-7" 
          : "2xl:max-w-[1680px] max-w-[1380px] mx-auto grid-flow-col grid-cols-2 xl:gap-x-20 md:gap-x-10 gap-x-3 mt-[120px] grid 2xl:pl-20 lg:pl-20 sm:pl-10 pl-4"
        )
  }`
}>


            {/*Article container*/}
            <div className="2xl:max-w-[1100px] col-span-2 xl:mt-0 sm:mt-[-40px] mt-[-120px]">
                <div className="col-span-2">
                    <div className="flex justify-start items-center space-x-4 mt-16 font-regular  xl:text-[12px] md:text-[10px] sm:text-[9px] text-[8px]">
                        <div>16.AUGUST 2023, 12:45
                        </div>
                        <div className="text-gray-400">Reading time: 2:00</div>
                        {/*npm modul na zobrazovanie casu -> date-fns*/} </div>

                    <div className="xl:text-6xl lg:text-5xl sm:text-[28px]  text-3xl xl:my-6 md:my-4 sm:my-3 my-4 font-bold">
                        {
                        article.title
                    }</div>

                    <div className=" flex justify-start items-center sm:space-x-4 space-x-2 xl:mt-10 xl:text-lg sm:text-[13px] text-[11px]">
                        <div className="xl:text-base md:text-[13px] text-[11px] font-spectral">written by
                        </div>
                        <strong className=" tracking-wider">PETER BRUNCIK</strong>
                        <div className="border-l-[1px] border-black  uppercase"
                            style={
                                {
                                    height: isLaptopXl ? '16px' : isLaptop ? '11px' : isTablet ? '10px' : '9px'
                                }
                        }></div>
                        <div>
                            <strong>{
                                article.label
                            }</strong>
                        </div>
                    </div>


                </div>


                {/*Article content*/}

                <div
  className="xl:mt-16 sm:mt-10 mt-7 xl:text-base sm:text-[13px] text-[14px] text-justify leading-6 pr-2"
  dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(article.content) }}
></div>


                {/*Review container*/}
                <div className="md:mt-[125px] mt-20 flex justify-center">
                    <div className="text-center">
                        <h1 className="lg:text-2xl md:text-xl text-[18px] font-bold mb-2">How do you rate this article?</h1>
                        <Rating id="reviewWindowTrigger" name="article-rating"
                            value={rating}
                            precision={0.5}
                            onChange={handleRatingChange}
                            style={
                                {
                                    fontSize: isDesktop ? 62 : isLaptopXl ? 55 : isTablet ? 55 : 45
                                }
                            }/> 
                            {/*Rate this article window*/}
                            {
                            isModalOpen ? <div className="fixed top-0 left-0 bg-[#00000080] z-[10] h-[100vh] w-full flex justify-center items-center">
                            <div id="reviewWindow" className="relative md:px-6 px-4 py-6 sm:w-[750px] w-[400px] lg:mx-0 md:mx-10 sm:mx-8 mx-4  bg-white rounded-[30px]">
                                <h1 className="text-left font-bold tracking-wider">
                                    Rate this article</h1>

                                <div className="absolute top-4 right-4 w-[28px]"><img src={closeButton}
                                        className="duration-300 ease-out hover:scale-110"
                                        onClick={
                                            () => handleCloseReviewWindow()
                                        }/></div>

                                <div className={
                                    `${
                                        hideNameInput ? "invisible" : "md:mt-7 mt-3 md:text-[13px] text-[10px] text-left"
                                    }`
                                }>
                                    <p className="font-bold md:text-xs text-[10px]">Name:</p>
                                    <div className="mt-1">
                                        <input name="nameInput" id="singleArticleInput" placeholder="Your name"
                                            onClick={
                                                () => {
                                                    setNameError(false);
                                                    handleClickOnInput()
                                                }
                                            }
                                            onChange={
                                                (e) => setName(e.target.value)
                                            }
                                            className={
                                                `md:max-w-[325px] max-w-full md:rounded-[30px] rounded-[15px] xl:border-2 border-[1px] 2xl:pt-[6px] 2xl:pb-[3px] py-1 md:px-4 px-3 ${
                                                    nameError ? "border-red-600 text-red-600 outline-0 animate-shake" : "border-gray-400 outline-0"
                                                }`
                                            }/>
                                    </div>
                            </div>

                            <div className={
                                `${
                                    hideNameInput ? "relative flex space-x-2 mt-[-40px]" : "relative  flex space-x-2 mt-2"
                                }`
                            }>
                                <Checkbox icon={<CheckboxIconForReviews/>}
                                    checkedIcon={<CheckboxIconCheckedForReviews/>}
                                    className="absolute left-0"
                                    onClick={
                                        () => {
                                            setHideNameInput(!hideNameInput),
                                            hideNameInput ? setName("") : handleAnonymousCheckboxCLick()
                                        }
                                    }/>
                                <div className="font-bold md:text-xs text-[10px] absolute bottom-[1px] left-4 ">Stay anonymous</div>
                            </div>

                            <h1 className="text-left md:text-xs text-[10px] italic md:mt-3 mt-4 font-bold">Choose tags that fit this article:</h1>

                            {/* Labels */}
                            <div className="flex flex-row flex-wrap auto-rows-fr md:space-x-2 space-x-1 my-2 md:text-sm text-xs transition-transform transform duration-330 ease-in-out">
                            {isMobile
                                ? (
                                labelsForArticleReview.map((label) => (
                                    <div
                                    key={label.id}
                                    onClick={() => handleLabelClick(label.id)}
                                    className={`cursor-pointer px-2 my-1 duration-300 ease-in-out rounded-2xl border ${
                                        selectedLabels.includes(label.id) ? "bg-black text-white border-black" : "border-black lg:hover:bg-black lg:hover:text-white active:bg-slate-600 active:border-slate-600"
                                    }`}
                                    >
                                    {label.labelTitle}
                                    </div>
                                ))
                                )
                                : 
                                <>
                                    {labelsToShow.map((label) => (
                                    <div
                                        key={label.id}
                                        onClick={() => handleLabelClick(label.id)}
                                        className={`cursor-pointer px-2 my-1 duration-300 ease-in-out rounded-2xl border ${
                                        selectedLabels.includes(label.id) ? " bg-black text-white border-black" : " border-black lg:hover:bg-black lg:hover:text-white active:bg-slate-600 active:border-slate-600"
                                        }`}
                                    >
                                        {label.labelTitle}
                                    </div>
                                    ))}
                                    {
                                    showMoreLabels 
                                    ? <div className="cursor-pointer px-2 py-[2px] my-auto outline outline-1 outline-black outline-offset-[-1px] bg-black text-white rounded-2xl underline underline-offset-2" onClick={()=> setShowMoreLabels(false)}>Less</div>
                                    : <div className="cursor-pointer px-2 py-[2px] my-auto outline outline-1 outline-black outline-offset-[-1px] bg-black text-white rounded-2xl underline underline-offset-2" onClick={() => setShowMoreLabels(true)}>More</div>
                                    }
                                    
                                </>
                                
                            }
                            </div>



                            <div className="mt-4">
                                <textarea placeholder="Send me your feedback..." id="singleArticleTextArea"
                                    onClick={
                                        () => {
                                            setCommentError(false);
                                            handleClickOnTextArea()
                                        }
                                    }
                                    onChange={
                                        (e) => setComment(e.target.value)
                                    }
                                    className={
                                        `w-full min-h-[45px] md:rounded-[30px] rounded-[15px] md:mb-6 mb-3 xl:border-2 border-[1px] md:py-[10px] py-[6px] md:px-4 px-3 md:text-[13px] text-[10px]  overflow-hidden ${
                                            commentError ? "border-red-600 text-red-600 outline-0 animate-shake" : "border-gray-400 outline-0"
                                        }`
                                    }/>
                            </div>

                        <Rating name="read-only"
                            value={rating}
                            readOnly
                            style={
                                {
                                    fontSize: isDesktop ? 70 : isTablet ? 50 : 48
                                }
                            }
                            precision={0.5}/> {/*Send button rating*/}
                        
                        <div className="text-right md:mt-2 mt-3 mb-[-10px]">
                            <button onClick={
                                    () => {
                                        handleSaveRating(),
                                        setClickOnPaperPlane(true),
                                        setTimeout(function () {
                                            setClickOnPaperPlane(false)
                                        }, 200)
                                    }
                                }
                                variant="contained"
                                onMouseEnter={
                                    () => isLaptop ? setHoverOnPaperPlane(true) : setHoverOnPaperPlane(false)
                                }
                                onMouseLeave={
                                    () => setHoverOnPaperPlane(false)
                                }
                                className=" bg-black lg:hover:bg-white lg:hover:text-black outline outline-black outline-1 outline-offset-[-2px] lg:hover:outline-2 active:bg-white active:text-black active:shadow-xl text-white ease-in-out duration-700  md:text-base text-sm md:mt-2 md:p-2 py-1 px-2 md:rounded-[30px] rounded-[20px]">
                                <div className="flex md:space-x-1 space-x-2 md:text-xs text-[11px] capitalize tracking-widest font-poppins">
                                    <div className="underline underline-offset-2  my-auto font-bold">send</div>
                                    <div className="my-auto">
                                        <img src={hoverOnPaperPlane || clickOnPaperPlane ? paperPlaneBlack : paperPlane} className="w-[11px]"/>
                                    </div>
                                </div>
                            </button>
                        </div>

                    </div>
                </div> 
                : ""
                    } </div>

                </div>


                {/*About the author - mobile res*/}
                {
                isTabletAboutMe || (isTablet && closeSideBar) ? <div className="mt-20 pr-10">
                    <h1 className="underline xl:underline-offset-[25px] sm:underline-offset-[15px] underline-offset-[12px] font-bold text-[#6F6F6F] decoration-gray-300 xl:text-base lg:text-sm sm:text-xs text-[10px]">ABOUT THE AUTHOR</h1>
                    <div className=" mt-8  text-[12px] text-justify">
                        <strong>Peter Brunčík </strong>
                        writes about egestas dui at iaculis ultricies. Nunc pulvinar neque at tellus accumsan lobortis nec non est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam dignissim dapibus volutpat. Pellentesque iaculis sapien quam, ut fermentum enim scelerisque in.
                        <div className="mt-6 underline underline-offset-4  decoration-gray-300 xl:text-base lg:text-sm sm:text-[11px] text-[8px] flex space-x-1">
                            <div className=" hover:cursor-pointer text-[11px]">
                                <Link to="/about">Click here to learn more</Link>
                            </div>

                            <div className="my-auto">
                                <img src={arrowRightIntro}
                                    className="hover:scale-110 duration-100 ease-in-out xl:w-[26px] lg:w-[20px] sm:w-[18px] w-[12px]  hover:cursor-pointer"/>
                            </div>
                        </div>
                    </div>


                    <div className="my-12">
                        <div className="flex space-x-3 my-auto">
                            <h1 className="my-auto text-sm font-bold uppercase tracking-widest">share:</h1>
                            <div className="flex space-x-3">
                                <PinterestShareButton url={currentURL}
                                    media={currentURL}><img src={pinterest}
                                        className="w-[20px] hover:scale-110 duration-300 ease-in-out"/></PinterestShareButton>
                                <TwitterShareButton url={currentURL}
                                    title="Check out this article!"
                                    via="peterbruncik"><img src={twitter}
                                        className="w-[20px] hover:scale-110 duration-300 ease-in-out"/></TwitterShareButton>
                                <FacebookShareButton url={currentURL}
                                    quote="Check out this article!"><img src={facebook}
                                        className="w-[20px] hover:scale-110 duration-300 ease-in-out"/></FacebookShareButton>
                            </div>
                        </div>
                    </div>


                    <div className="text-left text-[11px] pr-2">
                        <div className="divide-y-2 divide-gray-300">
                            <h1 className="uppercase mb-4 text-[#6F6F6F] font-bold">Read next</h1>
                            <div className="divide-y-2 divide-gray-300 mt-2">
                                {
                                otherArticles.map((article) => <div key={
                                    article._id
                                }>
                                    <RouteLink to={
                                        `/articles/${
                                            article._id
                                        }`
                                    }>
                                        <div className="xl:py-6 py-4">
                                            {
                                            article.title
                                        } </div>
                                    </RouteLink>
                                </div>)
                            } </div>


                            <div className="xl:pt-8 lg:pt-4 md:pt-4 pt-4 flex xl:space-x-4 md:space-x-3 space-x-2">
                                <div className="font-bold  hover:cursor-pointer">
                                    <Link to="/articles">All articles</Link>
                                </div>

                                <div className="my-auto">
                                    <img src={arrowRight}
                                        className="xl:w-[22px] w-[14px] hover:scale-105 duration-100 ease-in-out"/>
                                </div>

                            </div>

                        </div>

                    </div>

                </div> : ""
            }


                {/*Comments container*/}
                <div className="md:mt-[125px] lg:mt-[200px] mt-[100px] xl:mb-[225px] md:mb-[150px] md:pr-0 pr-4">
                    <h1 className="xl:text-4xl md:text-2xl text-xl font-bold">Comments and reviews</h1>

                    <div className="flex space-x-6 uppercase mt-6 2xl:text-[19px] xl:text-lg text-xs xl:mt-8">
                        <div className="my-auto ">
                            Comments
                        </div>

                        <div className="flex space-x-2 duration-500 ease-in-out  2xl:border-2 border-[1px] border-white   py-1 px-3 rounded-3xl lg:hover:border-black active:border-black hover:cursor-pointer ">
                            <div className="my-auto">
                                <img src={commentIcon}/>
                            </div>

                            <div id="triggerCommentsWindow" className="my-auto"
                                onClick={
                                    () => setOpenWriteCommentWindow(true)
                            }>
                                Write a comment
                            </div>

                        </div>


                    </div>


                    <div className="xl:text-2xl md:text-[18px] text-base mt-8 font-bold">12 thougths on "{
                        article.title
                    }"</div>


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
                openWriteCommentWindow ? <div className="fixed top-0 left-0 bg-[#00000080] z-[10] h-[100vh] w-full flex justify-center items-center md:px-0 px-6">
                    <div className="relative bg-white rounded-[30px] py-6 md:px-8 px-4 w-[500px]" id="commentWindow">

                        <div className="text-bold md:text-2xl text-xl font-bold">Write a comment</div>

                        <div className={
                            `${
                                hideNameInput ? "invisible" : "mt-7 md:text-base text-sm"
                            }`
                        }>
                            <p className="font-bold md:text-base text-xs">Name:</p>
                            <input placeholder="Your name " id="singleArticleInput" name="nameInput"
                                onChange={
                                    (e) => setName(e.target.value)
                                }
                                onClick={
                                    () => {
                                        setNameError(false);
                                        handleClickOnInput()
                                    }
                                }
                                className={
                                    `w-full md:rounded-[30px] rounded-[15px]  xl:border-2 border-[1px] mt-1 py-2 md:px-4 px-3 ${
                                        nameError ? "border-red-600 text-red-600 outline-0 animate-shake" : "border-gray-400 outline-0"
                                    }`
                                }/>
                        </div>

                    <div className={
                        `${
                            hideNameInput ? "flex space-x-1 mt-[-52px]" : "flex space-x-1 mt-1"
                        }`
                    }>
                        <Checkbox icon={<CheckboxIcon/>}
                            checkedIcon={<CheckboxIconChecked/>}
                            onClick={
                                () => {
                                    setHideNameInput(!hideNameInput),
                                    hideNameInput ? setName("") : handleAnonymousCheckboxCLick()
                                }
                            }/>
                        <div className="font-bold md:text-base text-xs mt-[14px] sm:mt-[10px]">Stay anonymous</div>
                    </div>

                    <div className="mt-8 md:text-base text-sm">
                        <p className="font-bold md:text-base text-xs">Your thoughts on this article:</p>
                        <textarea type="text" id="singleArticleTextArea" name="feedbackInput" placeholder="Write a comment... "
                            onClick={
                                () => {
                                    setCommentError(false),
                                    handleClickOnTextArea()
                                }
                            }
                            onChange={
                                (e) => setComment(e.target.value)
                            }
                            className={
                                `w-full md:rounded-[30px] rounded-[15px] h-[150px] xl:border-2 border-[1px] py-2 md:px-5 px-3 mt-3  overflow-hidden ${
                                    commentError ? "border-red-600 text-red-600 outline-0 animate-shake" : " border-gray-400 outline-0"
                                }`
                            }/>
                    </div>

                <div className="px-4 mt-8 xl:mt-12">
                    <buton onMouseEnter={
                            () => isLaptop ? setHoverOnPaperPlane(true) : setHoverOnPaperPlane(false)
                        }
                        onMouseLeave={
                            () => setHoverOnPaperPlane(false)
                        }
                        onClick={
                            () => {
                                handleSaveComment(),
                                setClickOnPaperPlane(true),
                                setTimeout(function () {
                                    setClickOnPaperPlane(false)
                                }, 200)
                            }
                        }
                        className="w-full bg-black lg:hover:bg-white lg:hover:text-black outline outline-black outline-1 outline-offset-[-2px] lg:hover:outline-2 active:bg-white active:text-black active:shadow-xl text-white ease-in-out duration-700 md:text-base text-sm p-2 rounded-[30px] flex space-x-2 justify-center">
                        <div className="font-bold underline-offset-2 underline">Send</div>
                        <div className="my-auto"><img src={
                                    hoverOnPaperPlane || clickOnPaperPlane ? paperPlaneBlack : paperPlane
                                }
                                className="w-[15px]"/></div>
                    </buton>
                </div>

                <div className="absolute top-5 right-5"
                    onClick={
                        () => handleCloseCommentWindow()
                }><img className="md:w-[30px] w-[24px] duration-300 ease-out hover:scale-110"
                        src={closeButton}/></div>
            </div>

        </div> : ""
            } </div>


            {/*About the author side panel*/}
            {
            closeSideBar ? <div className={
                    `${
                        isLaptop ? "hidden" : "text-bold absolute top-20 right-8 md:block hidden"
                    }`
                }
                onClick={
                    () => setCloseSideBar(false)
            }><BiHorizontalLeft size={20}/></div> : <div className={
                `${
                    closeSideBar ? "hidden" : "relative xl:max-w-[400px] lg:max-w-[300px] sm:max-w-[250px] max-w-[150px] xl:pr-20 xl:pl-12 lg:px-8 md:px-6 px-4 mx-auto text-left xl:border-l-2 border-l-[1px] mr-0 sm:mt-[-100px] mt-[-125px]  max-h-auto z-[0] md:block hidden"
                }`
            }>
                <div onClick={
                        () => setCloseSideBar(true)
                    }
                    className={
                        `${
                            isLaptop ? "hidden" : "absolute sm:left-2 sm:top-[60px] top-5"
                        }`
                }>
                    <BiHorizontalRight size={20}/>
                </div>
                <div className="lg:mt-[210px] md:mt-[150px] sm:mt-[180px] mt-[100px]">
                    <h1 className="underline xl:underline-offset-[25px] sm:underline-offset-[15px] underline-offset-[12px] font-bold text-[#6F6F6F] decoration-gray-300 xl:text-base lg:text-sm sm:text-xs text-[10px]">ABOUT THE AUTHOR</h1>
                    {/*About the author*/}
                    <div className="sm:mt-10 mt-8 xl:text-base lg:text-sm sm:text-xs text-[10px] text-justify">
                        <strong>Peter Brunčík </strong>
                        writes about egestas dui at iaculis ultricies. Nunc pulvinar neque at tellus accumsan lobortis nec non est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam dignissim dapibus volutpat. Pellentesque iaculis sapien quam, ut fermentum enim scelerisque in.
                        <div className="mt-6 underline underline-offset-4  decoration-gray-300 xl:text-base lg:text-sm sm:text-[11px] text-[8px] flex space-x-1">
                            <div className=" hover:cursor-pointer">
                                <Link to="/about">Click here to learn more</Link>
                            </div>

                            <div className="my-auto">
                                <img src={arrowRightIntro}
                                    className="hover:scale-110 duration-100 ease-in-out xl:w-[26px] lg:w-[20px] sm:w-[18px] w-[12px]  hover:cursor-pointer"/>
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
                        <div>
                            <PinterestShareButton url={currentURL}
                                media={currentURL}><img src={pinterest}
                                    className="xl:w-[58px] sm:w-[42px] w-[28px] hover:scale-110 duration-300 ease-in-out"/></PinterestShareButton>
                        </div>
                        <div>
                            <TwitterShareButton url={currentURL}
                                title="Check out this article!"
                                via="peterbruncik"><img src={twitter}
                                    className="xl:w-[58px] sm:w-[42px] w-[28px] hover:scale-110 duration-300 ease-in-out"/></TwitterShareButton>
                        </div>
                        <div>
                            <FacebookShareButton url={currentURL}
                                quote="Check out this article!"><img src={facebook}
                                    className="xl:w-[58px] sm:w-[42px] w-[28px] hover:scale-110 duration-300 ease-in-out"/></FacebookShareButton>
                        </div>
                    </div>
                </div>


                {/*Read next container*/}

                <div className="absolute bottom-0 text-left xl:text-base sm:text-xs text-xs  xl:mb-[100px] md:mb-2">
                    <div className="divide-y-2 divide-gray-300">
                        <h1 className="uppercase mb-4 text-[#6F6F6F] font-bold">Read next</h1>
                        <div className="divide-y-2 divide-gray-300 mt-2">
                            {
                            otherArticles.map((article) => <div key={
                                article._id
                            }>
                                <RouteLink to={
                                    `/articles/${
                                        article._id
                                    }`
                                }>
                                    <div className="xl:py-6 py-4">
                                        {
                                        article.title
                                    } </div>
                                </RouteLink>
                            </div>)
                        } </div>


                        <div className="xl:pt-8 lg:pt-4 md:pt-4 pt-4 pb-[100px] flex xl:space-x-4 md:space-x-3 space-x-2">
                            <div className="font-bold  hover:cursor-pointer">
                                <Link to="/articles">All articles</Link>
                            </div>

                            <div className="my-auto">
                                <img src={arrowRight}
                                    className="xl:w-[22px] w-[14px] hover:scale-105 duration-100 ease-in-out"/>
                            </div>

                        </div>

                    </div>

                </div>


            </div>
        } </div>
<Footer/>

    </>

    )
}
