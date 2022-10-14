import SectionWrapper from "../SectionWrapper/SectionWrapper"
import './Services.css'

const Services = () => {
    // const Services = {
    //     icon: 'satalite',
    //     title: 'Our first service',
    //     content: 'sdsdssdsd'
    // }

    return(
        <SectionWrapper title='We Offer Best Services' tagline='Category' children=''>
            <div className="col-12 col-sm-6 col-lg-3">
                <div className="service text-center d-flex flex-column align-items-center" >
                    <div className="icon">
                        <svg width="92" height="78" viewBox="0 0 92 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M92 60C92 69.9411 83.9411 78 74 78L47 78C44.2386 78 42 75.7614 42 73L42 39C42 33.4772 46.4772 29 52 29L87 29C89.7614 29 92 31.2386 92 34L92 60Z" fill="#FFF1DA"/>
                            <path d="M23.527 50.6574L21.6389 49.7535L10.4222 66.3382H22.9402L24.1464 65.5516V51.225L23.527 50.6574Z" fill="#407093"/>
                            <path d="M21.8095 49.8353L17.5644 47.803H16.7644L4.76062 65.5516L5.47525 66.3382H10.6483L21.8095 49.8353Z" fill="#365E7D"/>
                            <path d="M26.4 65.5515H9.84754C9.09559 65.5515 8.48596 66.161 8.48596 66.9131V68.6385C8.48596 69.3903 9.09545 69.9998 9.84727 69.9999H26.4C27.152 69.9999 27.7616 69.3904 27.7616 68.6385V66.9131C27.7616 66.161 27.152 65.5515 26.4 65.5515V65.5515Z" fill="#4A80AA"/>
                            <path d="M8.76775 68.6385V66.9131C8.76775 66.1611 9.37738 65.5515 10.1293 65.5515H1.36158C0.609627 65.5515 0 66.161 0 66.9131V68.6385C0 69.3904 0.609627 69.9999 1.36158 69.9999H10.1292C9.37724 69.9999 8.76775 69.3904 8.76775 68.6385V68.6385Z" fill="#407093"/>
                            <path d="M21.2397 39.9827C20.7302 41.0338 20.4423 42.2123 20.4423 43.459C20.4423 46.8659 22.5756 49.7721 25.5782 50.9218C26.8673 50.5179 28.0128 49.7893 28.9176 48.8301V47.0893L21.2397 39.9827Z" fill="#4A80AA"/>
                            <path d="M20.5767 43.4863C20.5767 42.2684 20.8583 41.1173 21.357 40.0909L18.9027 37.8192H17.9069C16.4009 39.2399 15.4595 41.2525 15.4595 43.4862C15.4595 47.7893 18.9477 51.2775 23.2508 51.2775C24.1471 51.2775 25.0067 51.1237 25.8078 50.8449C22.7628 49.7856 20.5767 46.8921 20.5767 43.4863V43.4863Z" fill="#407093"/>
                            <path d="M65.812 0.924695C64.5791 -0.308232 62.5801 -0.308232 61.3473 0.924695L58.3345 3.93756V4.31941L62.0949 8.23954L62.7991 8.40223L65.8119 5.38937C67.0449 4.15658 67.0449 2.15762 65.812 0.924695V0.924695Z" fill="#FFD086"/>
                            <path d="M66.6449 2.41492C66.5134 1.86915 66.238 1.35085 65.812 0.924695C64.5791 -0.308232 62.5801 -0.308232 61.3473 0.924695L58.3345 3.93756V4.31941L60.3282 6.3978C61.5169 5.16091 62.697 3.94029 63.3039 3.3334C64.3156 2.32182 65.7933 2.31403 66.6449 2.41492V2.41492Z" fill="#FFC365"/>
                            <path d="M55.4975 8.95026C55.4629 8.95026 55.4279 8.94848 55.3927 8.94507L20.5763 5.51808C19.9957 5.46094 19.5714 4.944 19.6286 4.36336C19.6857 3.78272 20.2029 3.35875 20.7833 3.41549L55.5997 6.84234C56.1802 6.89949 56.6046 7.41642 56.5475 7.99706C56.4937 8.5427 56.0342 8.95026 55.4975 8.95026Z" fill="#365E7D"/>
                            <path d="M30.6459 15.4681C30.1774 15.4681 29.7493 15.1539 29.6249 14.6795C29.4769 14.1151 29.8144 13.5377 30.3787 13.3896L55.2287 6.87154C55.793 6.72374 56.3706 7.06103 56.5185 7.6254C56.6666 8.18964 56.3292 8.76714 55.7648 8.9152L30.9147 15.4333C30.8248 15.4568 30.7345 15.4681 30.6459 15.4681V15.4681Z" fill="#407093"/>
                            <path d="M62.2465 47.136C61.7093 47.136 61.2498 46.7281 61.1964 46.1823L57.7907 11.3445C57.734 10.764 58.1586 10.2472 58.7393 10.1903C59.3199 10.1362 59.8366 10.5584 59.8933 11.139L63.299 45.9768C63.3557 46.5573 62.9311 47.0741 62.3504 47.131C62.3156 47.1342 62.2808 47.136 62.2465 47.136Z" fill="#365E7D"/>
                            <path d="M52.2252 37.2475C52.1357 37.2475 52.0446 37.2359 51.9538 37.212C51.3899 37.0624 51.054 36.4841 51.2035 35.9201L57.8176 10.9741C57.967 10.41 58.5452 10.0746 59.1093 10.2236C59.6732 10.3732 60.0092 10.9515 59.8596 11.5155L53.2456 36.4615C53.1202 36.9348 52.6927 37.2475 52.2252 37.2475V37.2475Z" fill="#407093"/>
                            <path d="M55.3069 6.96429L58.3274 3.94376L62.7914 8.40782L59.7709 11.4284L55.3069 6.96429Z" fill="#FFC365"/>
                            <path d="M57.6009 9.24573C58.3269 8.48557 59.4605 7.29995 60.557 6.15999L58.3347 3.9375L55.3136 6.95843L57.6009 9.24573Z" fill="#FFA90F"/>
                            <path d="M60.4509 13.1519C60.1806 13.1519 59.9102 13.0487 59.704 12.8425L53.8944 7.03305C53.4818 6.62044 53.4818 5.95175 53.8944 5.53899C54.3069 5.12665 54.9757 5.12665 55.3883 5.53899L61.1979 11.3484C61.6105 11.761 61.6105 12.4297 61.1979 12.8425C60.9916 13.0488 60.7213 13.1519 60.4509 13.1519Z" fill="#4A80AA"/>
                            <path d="M61.1327 49.0376L25.7619 13.36C21.0724 23.9466 20.2581 35.3114 23.7688 45.1115C33.4643 53.8573 47.9476 55.2003 61.2809 49.7026L61.1327 49.0376Z" fill="#B5DCFF"/>
                            <path d="M25.9502 13.55L17.8463 5.37573L17.0341 5.45585C11.3245 19.3031 12.9917 34.3917 22.6683 44.0684C23.2544 44.6545 23.8609 45.2107 24.4853 45.7383C20.4062 35.9498 21.0691 24.3077 25.9502 13.55V13.55Z" fill="#8BCAFF"/>
                            <path d="M64.365 46.5017L28.4914 10.6282C28.1384 10.6826 27.7985 10.8431 27.5267 11.1149L25.9664 12.6754C25.6313 13.0105 25.4646 13.4481 25.4598 13.8874L61.2196 49.647C61.7513 50.1787 62.6133 50.1787 63.145 49.647L64.3651 48.4271C64.8967 47.8955 64.8967 47.0334 64.365 46.5017Z" fill="#DBEDFF"/>
                            <path d="M26.0203 12.7021L27.5481 11.1743C27.8295 10.8929 28.1848 10.7318 28.5515 10.6882L20.2352 2.37192C19.7035 1.84022 18.8415 1.84022 18.3096 2.37192L17.0896 3.59199C16.5579 4.12369 16.5579 4.9857 17.0896 5.5174L25.5228 13.9506C25.5117 13.5 25.6764 13.0459 26.0203 12.7021V12.7021Z" fill="#B5DCFF"/>
                        </svg>
                    </div>
                    <h4 className="my-3">Calculated Weather</h4>
                    <p className="color-blue text-center">Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
                <div className="service active text-center d-flex flex-column align-items-center" >
                    <div className="service-content">
                        <div className="icon">
                        <svg width="77" height="66" viewBox="0 0 77 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M27 48C27 57.9411 35.0589 66 45 66L72 66C74.7614 66 77 63.7614 77 61L77 27C77 21.4772 72.5228 17 67 17L32 17C29.2386 17 27 19.2386 27 22L27 48Z" fill="#FFF1DA"/>
                                <path d="M50 27.8482V22.1518C50 21.0351 49.0947 20.1299 47.978 20.1299H45.7994C44.9283 20.1299 44.1553 19.5717 43.8815 18.7448C43.5764 17.8235 43.2058 16.9322 42.7752 16.0763C42.3831 15.2967 42.5332 14.3542 43.1502 13.7371L44.6916 12.1957C45.4813 11.406 45.4813 10.1259 44.6916 9.33622L40.6637 5.30825C39.874 4.51861 38.5938 4.51861 37.8042 5.30825L36.2628 6.8497C35.6457 7.4668 34.7032 7.6168 33.9236 7.22465C33.0677 6.79406 32.1763 6.42344 31.2551 6.11841C30.4281 5.84457 29.87 5.07163 29.87 4.2005V2.02193C29.87 0.905231 28.9648 0 27.8481 0H22.1517C21.035 0 20.1298 0.905231 20.1298 2.02193V4.2006C20.1298 5.07173 19.5716 5.84467 18.7447 6.11851C17.8234 6.42354 16.9321 6.79416 16.0761 7.22475C15.2966 7.6169 14.3541 7.4668 13.737 6.8498L12.1956 5.30835C11.4059 4.51871 10.1257 4.51871 9.3361 5.30835L5.30833 9.33632C4.51869 10.126 4.51869 11.4061 5.30833 12.1958L6.84978 13.7372C7.46678 14.3543 7.61688 15.2968 7.22473 16.0764C6.79415 16.9323 6.42352 17.8236 6.11849 18.7449C5.92493 19.3293 5.48218 19.7794 4.93167 19.9932C4.7032 20.0819 4.55672 20.2305 4.30119 20.2305H2.12252C1.00582 20.2305 0.100586 21.1357 0.100586 22.2524V27.7476C0.100586 28.8643 1.00582 29.7695 2.12252 29.7695H4.30119C5.17232 29.7695 5.94525 30.4283 6.2191 31.2552C6.52413 32.1765 6.89475 33.0677 7.32533 33.9237C7.71749 34.7033 7.56739 35.6458 6.95038 36.2629L5.50954 37.8043C4.7199 38.594 4.7199 39.8741 5.50954 40.6638L9.3363 44.4905C10.1259 45.2802 11.4061 45.2802 12.1958 44.4905L13.7372 42.9491C14.3542 42.332 15.2968 42.182 16.0763 42.5741C16.9323 43.0047 18.0248 43.476 18.9461 43.781C19.773 44.0548 20.3312 44.8278 20.3312 45.6989V47.8776C20.3312 48.9943 21.2364 49.8995 22.3531 49.8995H27.7477C28.8644 49.8995 29.7696 48.9943 29.7696 47.8776V45.6989C29.7696 45.4434 29.9182 45.2969 30.0069 45.0684C30.2207 44.5179 30.6709 44.0752 31.2552 43.8816C32.1764 43.5766 33.0678 43.2059 33.9237 42.7754C34.7033 42.3832 35.6458 42.5333 36.2629 43.1503L37.8043 44.6917C38.5939 45.4814 39.8741 45.4814 40.6638 44.6917L44.6917 40.6638C45.4814 39.8741 45.4814 38.594 44.6917 37.8043L43.1503 36.2629C42.5333 35.6458 42.3832 34.7033 42.7753 33.9237C43.2059 33.0678 43.5765 32.1765 43.8816 31.2552C44.1554 30.4283 44.9284 29.8701 45.7995 29.8701H47.9782C49.0948 29.8701 50 28.9649 50 27.8482V27.8482Z" fill="#B6C4CF"/>
                                <path d="M30.007 45.0684C29.9185 45.2967 29.8702 45.5442 29.8702 45.7998V47.9778C29.8702 49.0945 28.9648 50 27.8481 50H22.1519C21.0352 50 20.1298 49.0945 20.1298 47.9778V45.7998C20.1298 44.9285 19.5714 44.1549 18.7445 43.8812C17.8239 43.5764 16.9326 43.2062 16.0765 42.7756C15.2968 42.3833 14.3541 42.5332 13.7374 43.1499L12.1962 44.6911C11.4064 45.4808 10.1258 45.4808 9.33602 44.6911L5.30785 40.6639C4.51911 39.8742 4.51911 38.5935 5.30785 37.8038L6.8501 36.2625C7.4668 35.6458 7.6167 34.7032 7.22435 33.9235C6.79376 33.0674 6.42354 32.176 6.11871 31.2555C5.84507 30.4285 5.07143 29.8702 4.2002 29.8702H2.02213C0.905433 29.8702 0 28.9648 0 27.8481V22.1519C0 21.0352 0.905433 20.1297 2.02213 20.1297H4.2002C4.45573 20.1297 4.70322 20.0815 4.93159 19.9929C4.92958 20.1187 4.92857 20.2454 4.92857 20.3722C4.92857 34.013 15.9869 45.0714 29.6278 45.0714C29.7545 45.0714 29.8813 45.0704 30.007 45.0684V45.0684Z" fill="#9FACBA"/>
                                <path d="M25 41.5996C34.1677 41.5996 41.5996 34.1677 41.5996 25C41.5996 15.8323 34.1677 8.40039 25 8.40039C15.8323 8.40039 8.40039 15.8323 8.40039 25C8.40039 34.1677 15.8323 41.5996 25 41.5996Z" fill="#9FACBA"/>
                                <path d="M24.9999 38.0784C32.2229 38.0784 38.0783 32.223 38.0783 25C38.0783 17.7769 32.2229 11.9215 24.9999 11.9215C17.7768 11.9215 11.9214 17.7769 11.9214 25C11.9214 32.223 17.7768 38.0784 24.9999 38.0784Z" fill="#F8F7F7"/>
                            </svg>
                        </div>
                        <h4 className="my-3">Best Flights</h4>
                        <p className="color-blue text-center">Engrossed listening. Park gate sell they west hard for the.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
                <div className="service text-center d-flex flex-column align-items-center" >
                    <div className="icon">
                    <svg width="77" height="66" viewBox="0 0 77 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27 48C27 57.9411 35.0589 66 45 66L72 66C74.7614 66 77 63.7614 77 61L77 27C77 21.4772 72.5228 17 67 17L32 17C29.2386 17 27 19.2386 27 22L27 48Z" fill="#FFF1DA"/>
                            <path d="M50 27.8482V22.1518C50 21.0351 49.0947 20.1299 47.978 20.1299H45.7994C44.9283 20.1299 44.1553 19.5717 43.8815 18.7448C43.5764 17.8235 43.2058 16.9322 42.7752 16.0763C42.3831 15.2967 42.5332 14.3542 43.1502 13.7371L44.6916 12.1957C45.4813 11.406 45.4813 10.1259 44.6916 9.33622L40.6637 5.30825C39.874 4.51861 38.5938 4.51861 37.8042 5.30825L36.2628 6.8497C35.6457 7.4668 34.7032 7.6168 33.9236 7.22465C33.0677 6.79406 32.1763 6.42344 31.2551 6.11841C30.4281 5.84457 29.87 5.07163 29.87 4.2005V2.02193C29.87 0.905231 28.9648 0 27.8481 0H22.1517C21.035 0 20.1298 0.905231 20.1298 2.02193V4.2006C20.1298 5.07173 19.5716 5.84467 18.7447 6.11851C17.8234 6.42354 16.9321 6.79416 16.0761 7.22475C15.2966 7.6169 14.3541 7.4668 13.737 6.8498L12.1956 5.30835C11.4059 4.51871 10.1257 4.51871 9.3361 5.30835L5.30833 9.33632C4.51869 10.126 4.51869 11.4061 5.30833 12.1958L6.84978 13.7372C7.46678 14.3543 7.61688 15.2968 7.22473 16.0764C6.79415 16.9323 6.42352 17.8236 6.11849 18.7449C5.92493 19.3293 5.48218 19.7794 4.93167 19.9932C4.7032 20.0819 4.55672 20.2305 4.30119 20.2305H2.12252C1.00582 20.2305 0.100586 21.1357 0.100586 22.2524V27.7476C0.100586 28.8643 1.00582 29.7695 2.12252 29.7695H4.30119C5.17232 29.7695 5.94525 30.4283 6.2191 31.2552C6.52413 32.1765 6.89475 33.0677 7.32533 33.9237C7.71749 34.7033 7.56739 35.6458 6.95038 36.2629L5.50954 37.8043C4.7199 38.594 4.7199 39.8741 5.50954 40.6638L9.3363 44.4905C10.1259 45.2802 11.4061 45.2802 12.1958 44.4905L13.7372 42.9491C14.3542 42.332 15.2968 42.182 16.0763 42.5741C16.9323 43.0047 18.0248 43.476 18.9461 43.781C19.773 44.0548 20.3312 44.8278 20.3312 45.6989V47.8776C20.3312 48.9943 21.2364 49.8995 22.3531 49.8995H27.7477C28.8644 49.8995 29.7696 48.9943 29.7696 47.8776V45.6989C29.7696 45.4434 29.9182 45.2969 30.0069 45.0684C30.2207 44.5179 30.6709 44.0752 31.2552 43.8816C32.1764 43.5766 33.0678 43.2059 33.9237 42.7754C34.7033 42.3832 35.6458 42.5333 36.2629 43.1503L37.8043 44.6917C38.5939 45.4814 39.8741 45.4814 40.6638 44.6917L44.6917 40.6638C45.4814 39.8741 45.4814 38.594 44.6917 37.8043L43.1503 36.2629C42.5333 35.6458 42.3832 34.7033 42.7753 33.9237C43.2059 33.0678 43.5765 32.1765 43.8816 31.2552C44.1554 30.4283 44.9284 29.8701 45.7995 29.8701H47.9782C49.0948 29.8701 50 28.9649 50 27.8482V27.8482Z" fill="#B6C4CF"/>
                            <path d="M30.007 45.0684C29.9185 45.2967 29.8702 45.5442 29.8702 45.7998V47.9778C29.8702 49.0945 28.9648 50 27.8481 50H22.1519C21.0352 50 20.1298 49.0945 20.1298 47.9778V45.7998C20.1298 44.9285 19.5714 44.1549 18.7445 43.8812C17.8239 43.5764 16.9326 43.2062 16.0765 42.7756C15.2968 42.3833 14.3541 42.5332 13.7374 43.1499L12.1962 44.6911C11.4064 45.4808 10.1258 45.4808 9.33602 44.6911L5.30785 40.6639C4.51911 39.8742 4.51911 38.5935 5.30785 37.8038L6.8501 36.2625C7.4668 35.6458 7.6167 34.7032 7.22435 33.9235C6.79376 33.0674 6.42354 32.176 6.11871 31.2555C5.84507 30.4285 5.07143 29.8702 4.2002 29.8702H2.02213C0.905433 29.8702 0 28.9648 0 27.8481V22.1519C0 21.0352 0.905433 20.1297 2.02213 20.1297H4.2002C4.45573 20.1297 4.70322 20.0815 4.93159 19.9929C4.92958 20.1187 4.92857 20.2454 4.92857 20.3722C4.92857 34.013 15.9869 45.0714 29.6278 45.0714C29.7545 45.0714 29.8813 45.0704 30.007 45.0684V45.0684Z" fill="#9FACBA"/>
                            <path d="M25 41.5996C34.1677 41.5996 41.5996 34.1677 41.5996 25C41.5996 15.8323 34.1677 8.40039 25 8.40039C15.8323 8.40039 8.40039 15.8323 8.40039 25C8.40039 34.1677 15.8323 41.5996 25 41.5996Z" fill="#9FACBA"/>
                            <path d="M24.9999 38.0784C32.2229 38.0784 38.0783 32.223 38.0783 25C38.0783 17.7769 32.2229 11.9215 24.9999 11.9215C17.7768 11.9215 11.9214 17.7769 11.9214 25C11.9214 32.223 17.7768 38.0784 24.9999 38.0784Z" fill="#F8F7F7"/>
                        </svg>
                    </div>
                    <h4 className="my-3">Best Flights</h4>
                    <p className="color-blue text-center">Engrossed listening. Park gate sell they west hard for the.</p>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3">
                <div className="service text-center d-flex flex-column align-items-center" >
                    <div className="icon">
                        <svg width="77" height="66" viewBox="0 0 77 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M27 48C27 57.9411 35.0589 66 45 66L72 66C74.7614 66 77 63.7614 77 61L77 27C77 21.4772 72.5228 17 67 17L32 17C29.2386 17 27 19.2386 27 22L27 48Z" fill="#FFF1DA"/>
                            <path d="M50 27.8482V22.1518C50 21.0351 49.0947 20.1299 47.978 20.1299H45.7994C44.9283 20.1299 44.1553 19.5717 43.8815 18.7448C43.5764 17.8235 43.2058 16.9322 42.7752 16.0763C42.3831 15.2967 42.5332 14.3542 43.1502 13.7371L44.6916 12.1957C45.4813 11.406 45.4813 10.1259 44.6916 9.33622L40.6637 5.30825C39.874 4.51861 38.5938 4.51861 37.8042 5.30825L36.2628 6.8497C35.6457 7.4668 34.7032 7.6168 33.9236 7.22465C33.0677 6.79406 32.1763 6.42344 31.2551 6.11841C30.4281 5.84457 29.87 5.07163 29.87 4.2005V2.02193C29.87 0.905231 28.9648 0 27.8481 0H22.1517C21.035 0 20.1298 0.905231 20.1298 2.02193V4.2006C20.1298 5.07173 19.5716 5.84467 18.7447 6.11851C17.8234 6.42354 16.9321 6.79416 16.0761 7.22475C15.2966 7.6169 14.3541 7.4668 13.737 6.8498L12.1956 5.30835C11.4059 4.51871 10.1257 4.51871 9.3361 5.30835L5.30833 9.33632C4.51869 10.126 4.51869 11.4061 5.30833 12.1958L6.84978 13.7372C7.46678 14.3543 7.61688 15.2968 7.22473 16.0764C6.79415 16.9323 6.42352 17.8236 6.11849 18.7449C5.92493 19.3293 5.48218 19.7794 4.93167 19.9932C4.7032 20.0819 4.55672 20.2305 4.30119 20.2305H2.12252C1.00582 20.2305 0.100586 21.1357 0.100586 22.2524V27.7476C0.100586 28.8643 1.00582 29.7695 2.12252 29.7695H4.30119C5.17232 29.7695 5.94525 30.4283 6.2191 31.2552C6.52413 32.1765 6.89475 33.0677 7.32533 33.9237C7.71749 34.7033 7.56739 35.6458 6.95038 36.2629L5.50954 37.8043C4.7199 38.594 4.7199 39.8741 5.50954 40.6638L9.3363 44.4905C10.1259 45.2802 11.4061 45.2802 12.1958 44.4905L13.7372 42.9491C14.3542 42.332 15.2968 42.182 16.0763 42.5741C16.9323 43.0047 18.0248 43.476 18.9461 43.781C19.773 44.0548 20.3312 44.8278 20.3312 45.6989V47.8776C20.3312 48.9943 21.2364 49.8995 22.3531 49.8995H27.7477C28.8644 49.8995 29.7696 48.9943 29.7696 47.8776V45.6989C29.7696 45.4434 29.9182 45.2969 30.0069 45.0684C30.2207 44.5179 30.6709 44.0752 31.2552 43.8816C32.1764 43.5766 33.0678 43.2059 33.9237 42.7754C34.7033 42.3832 35.6458 42.5333 36.2629 43.1503L37.8043 44.6917C38.5939 45.4814 39.8741 45.4814 40.6638 44.6917L44.6917 40.6638C45.4814 39.8741 45.4814 38.594 44.6917 37.8043L43.1503 36.2629C42.5333 35.6458 42.3832 34.7033 42.7753 33.9237C43.2059 33.0678 43.5765 32.1765 43.8816 31.2552C44.1554 30.4283 44.9284 29.8701 45.7995 29.8701H47.9782C49.0948 29.8701 50 28.9649 50 27.8482V27.8482Z" fill="#B6C4CF"/>
                            <path d="M30.007 45.0684C29.9185 45.2967 29.8702 45.5442 29.8702 45.7998V47.9778C29.8702 49.0945 28.9648 50 27.8481 50H22.1519C21.0352 50 20.1298 49.0945 20.1298 47.9778V45.7998C20.1298 44.9285 19.5714 44.1549 18.7445 43.8812C17.8239 43.5764 16.9326 43.2062 16.0765 42.7756C15.2968 42.3833 14.3541 42.5332 13.7374 43.1499L12.1962 44.6911C11.4064 45.4808 10.1258 45.4808 9.33602 44.6911L5.30785 40.6639C4.51911 39.8742 4.51911 38.5935 5.30785 37.8038L6.8501 36.2625C7.4668 35.6458 7.6167 34.7032 7.22435 33.9235C6.79376 33.0674 6.42354 32.176 6.11871 31.2555C5.84507 30.4285 5.07143 29.8702 4.2002 29.8702H2.02213C0.905433 29.8702 0 28.9648 0 27.8481V22.1519C0 21.0352 0.905433 20.1297 2.02213 20.1297H4.2002C4.45573 20.1297 4.70322 20.0815 4.93159 19.9929C4.92958 20.1187 4.92857 20.2454 4.92857 20.3722C4.92857 34.013 15.9869 45.0714 29.6278 45.0714C29.7545 45.0714 29.8813 45.0704 30.007 45.0684V45.0684Z" fill="#9FACBA"/>
                            <path d="M25 41.5996C34.1677 41.5996 41.5996 34.1677 41.5996 25C41.5996 15.8323 34.1677 8.40039 25 8.40039C15.8323 8.40039 8.40039 15.8323 8.40039 25C8.40039 34.1677 15.8323 41.5996 25 41.5996Z" fill="#9FACBA"/>
                            <path d="M24.9999 38.0784C32.2229 38.0784 38.0783 32.223 38.0783 25C38.0783 17.7769 32.2229 11.9215 24.9999 11.9215C17.7768 11.9215 11.9214 17.7769 11.9214 25C11.9214 32.223 17.7768 38.0784 24.9999 38.0784Z" fill="#F8F7F7"/>
                        </svg>
                    </div>
                    <h4 className="my-3">Local Events</h4>
                    <p className="color-blue text-center">Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                </div>
            </div>
        </SectionWrapper>
    )
}
export default Services