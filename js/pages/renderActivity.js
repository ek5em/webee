const renderActivity = () => {
    const main = document.getElementById("main-content");
    main.innerHTML = `
    <div class="d-flex flex-row gaprow-5 row m-0">
    <!-- Основной контент -->
    <div class="d-flex gap-5 flex-column col-md-9 p-0 pe-md-3">
        <!-- Большой пост -->
        <div class="post px-3 pt-5 pb-3 p-md-5 pt-md-6 bg-white">
            <img
                src="assets/png/Sunset.png"
                alt="Post image"
                class="w-100 h-auto"
            />
            <!-- Комментарий -->
            <div class="mt-4 comment">
                <div>
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V9C16 10.6569 14.6569 12 13 12H5.52219L2.1121 14.7281C1.26091 15.409 0 14.803 0 13.7129V3ZM1.3 13.7129L5.06617 10.7H13C13.9389 10.7 14.7 9.93888 14.7 9V3C14.7 2.06112 13.9389 1.3 13 1.3H3C2.06112 1.3 1.3 2.06112 1.3 3L1.3 13.7129ZM4.49219 4.64356C4.49219 4.28458 4.7832 3.99356 5.14219 3.99356H10.8579C11.2169 3.99356 11.5079 4.28458 11.5079 4.64356C11.5079 5.00255 11.2169 5.29356 10.8579 5.29356L5.14219 5.29356C4.7832 5.29356 4.49219 5.00255 4.49219 4.64356ZM4.49219 7.63611C4.49219 7.27713 4.7832 6.98611 5.14219 6.98611L8.79121 6.98611C9.1502 6.98611 9.44121 7.27713 9.44121 7.63611C9.44121 7.9951 9.1502 8.28611 8.79121 8.28611H5.14219C4.7832 8.28611 4.49219 7.9951 4.49219 7.63611Z"
                            fill="#505050"
                        />
                    </svg>
                    <span class="px-2"
                        ><a
                            class="text-decoration-none"
                            href="#"
                            >Jason Anderson</a
                        >
                        commented:</span
                    >
                </div>
                <blockquote class="blockquote fs-7 m-0 mt-4 px-2">
                    Don't sit and wait. Get out there, feel
                    life. Touch the sun, and immerse in the sea.
                    Keep love in your heart. A life without it
                    is like a sunless garden when the flowers
                    are dead. Because summer is passion,
                    memories, light breeze, the sun that appears
                    on the skin and caresses the face.
                    <p class="blockquote-footer m-0 mt-4">
                        Jason, 10:30 am
                    </p>
                </blockquote>
            </div>
            <!-- Статистика -->
            <div class="d-flex gap-5 mt-4">
                <div class="d-flex align-items-center gap-2">
                    <!-- Глазик -->
                    <svg
                        width="20"
                        height="14"
                        viewBox="0 0 20 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.30609 4.08066C9.68228 3.99158 10 4.3134 10 4.7V5.7C10 6.41797 10.5821 7 11.3 7H12.3C12.6866 7 13.0085 7.31775 12.9194 7.69395C12.6062 9.01621 11.418 10 10 10C8.34318 10 7.00003 8.65685 7.00003 7C7.00003 5.58201 7.98382 4.39379 9.30609 4.08066Z"
                            fill="#505050"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10 0C5.11931 0 1.86625 3.65464 0.43688 5.68254C-0.126096 6.48125 -0.126095 7.51875 0.43688 8.31746C1.86626 10.3454 5.11931 14 10 14C14.8808 14 18.1338 10.3454 19.5632 8.31746C20.1262 7.51875 20.1262 6.48124 19.5632 5.68254C18.1338 3.65464 14.8808 0 10 0ZM3.70874 3.92728C2.76185 4.77768 2.02109 5.69143 1.49945 6.4315C1.25305 6.78108 1.25305 7.21892 1.49945 7.5685C2.02109 8.30857 2.76185 9.22232 3.70873 10.0727C3.25483 9.14511 3.00004 8.10231 3.00004 7C3.00004 5.89769 3.25483 4.85489 3.70874 3.92728ZM10 12.7C6.85202 12.7 4.30004 10.148 4.30004 7C4.30004 3.85198 6.85202 1.3 10 1.3C13.1481 1.3 15.7 3.85198 15.7 7C15.7 10.148 13.1481 12.7 10 12.7ZM16.2913 3.92728C17.2382 4.77768 17.979 5.69143 18.5006 6.4315C18.747 6.78108 18.747 7.21892 18.5006 7.5685C17.979 8.30857 17.2382 9.22232 16.2913 10.0727C16.7452 9.14511 17 8.10231 17 7C17 5.89769 16.7452 4.85489 16.2913 3.92728Z"
                            fill="#505050"
                        />
                    </svg>
                    432
                </div>
                <div class="d-flex align-items-center gap-2">
                    <!-- Сообщение -->
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0 3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V9C16 10.6569 14.6569 12 13 12H5.52219L2.1121 14.7281C1.26091 15.409 0 14.803 0 13.7129V3ZM1.3 13.7129L5.06617 10.7H13C13.9389 10.7 14.7 9.93888 14.7 9V3C14.7 2.06112 13.9389 1.3 13 1.3H3C2.06112 1.3 1.3 2.06112 1.3 3L1.3 13.7129ZM4.49219 4.64356C4.49219 4.28458 4.7832 3.99356 5.14219 3.99356H10.8579C11.2169 3.99356 11.5079 4.28458 11.5079 4.64356C11.5079 5.00255 11.2169 5.29356 10.8579 5.29356L5.14219 5.29356C4.7832 5.29356 4.49219 5.00255 4.49219 4.64356ZM4.49219 7.63611C4.49219 7.27713 4.7832 6.98611 5.14219 6.98611L8.79121 6.98611C9.1502 6.98611 9.44121 7.27713 9.44121 7.63611C9.44121 7.9951 9.1502 8.28611 8.79121 8.28611H5.14219C4.7832 8.28611 4.49219 7.9951 4.49219 7.63611Z"
                            fill="#505050"
                        />
                    </svg>
                    47
                </div>
            </div>
        </div>

        <!-- Дополнительные посты -->
        <div
            class="d-flex justify-content-between px-3 px-md-5 bg-white fs-6"
        >
            <div class="d-flex align-items-center">
                Sunset Sunset Sunset
            </div>
            <div class="d-flex align-items-center py-2 py-md-3">
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.65 5.15343C9.65 4.79445 9.35898 4.50344 9 4.50344C8.64102 4.50344 8.35 4.79445 8.35 5.15343V9.65344C8.35 10.0124 8.64102 10.3034 9 10.3034H13C13.359 10.3034 13.65 10.0124 13.65 9.65344C13.65 9.29445 13.359 9.00344 13 9.00344H9.65V5.15343Z"
                        fill="#505050"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9ZM9 1.3C4.74741 1.3 1.3 4.74741 1.3 9C1.3 13.2526 4.74741 16.7 9 16.7C13.2526 16.7 16.7 13.2526 16.7 9C16.7 4.74741 13.2526 1.3 9 1.3Z"
                        fill="#505050"
                    />
                </svg>
                <span class="pe-3 ps-2">53 minutes ago</span>
                <svg
                    class="cursor-pointer"
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.119629 1.56008C0.119629 1.38008 0.189628 1.21008 0.329628 1.08008C0.599628 0.840084 1.00963 0.860084 1.24963 1.12008L6.98993 7.48922L12.5399 1.08006C12.7799 0.810057 13.1899 0.800057 13.4599 1.04006C13.7199 1.28006 13.7399 1.69006 13.4999 1.96006L7.50993 8.85922C7.22993 9.16922 6.74993 9.16922 6.46993 8.85922L0.289627 2.00008C0.169627 1.87008 0.119629 1.72008 0.119629 1.56008Z"
                        fill="#505050"
                    />
                </svg>
            </div>
        </div>
        <div
            class="d-flex justify-content-between px-3 px-md-5 bg-white fs-6"
        >
            <div class="d-flex align-items-center">
                Morning of Siberia
            </div>
            <div class="d-flex align-items-center py-2 py-md-3">
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.65 5.15343C9.65 4.79445 9.35898 4.50344 9 4.50344C8.64102 4.50344 8.35 4.79445 8.35 5.15343V9.65344C8.35 10.0124 8.64102 10.3034 9 10.3034H13C13.359 10.3034 13.65 10.0124 13.65 9.65344C13.65 9.29445 13.359 9.00344 13 9.00344H9.65V5.15343Z"
                        fill="#505050"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9ZM9 1.3C4.74741 1.3 1.3 4.74741 1.3 9C1.3 13.2526 4.74741 16.7 9 16.7C13.2526 16.7 16.7 13.2526 16.7 9C16.7 4.74741 13.2526 1.3 9 1.3Z"
                        fill="#505050"
                    />
                </svg>
                <span class="pe-3 ps-2">56 minutes ago</span>
                <svg
                    class="cursor-pointer"
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.119629 1.56008C0.119629 1.38008 0.189628 1.21008 0.329628 1.08008C0.599628 0.840084 1.00963 0.860084 1.24963 1.12008L6.98993 7.48922L12.5399 1.08006C12.7799 0.810057 13.1899 0.800057 13.4599 1.04006C13.7199 1.28006 13.7399 1.69006 13.4999 1.96006L7.50993 8.85922C7.22993 9.16922 6.74993 9.16922 6.46993 8.85922L0.289627 2.00008C0.169627 1.87008 0.119629 1.72008 0.119629 1.56008Z"
                        fill="#505050"
                    />
                </svg>
            </div>
        </div>
    </div>
    <!-- Сайдбар -->
    <div class="d-flex gap-5 flex-column col-md-3 p-0 ps-md-3">
        <!-- Профиль-->
        <div
            class="d-flex flex-column align-items-center gap-3 profile-card text-center bg-white py-5"
        >
            <a href="#profile">
                <img
                    src="assets/png/Avatar.png"
                    alt="Hanna Dorman"
                />
            </a>
            <div class="d-flex flex-column gap-2">
                <h5 class="m-0 fw-normal fs-55">
                    Hanna Dorman
                </h5>
                <p class="m-0 c-second">UX/UI Designer</p>
            </div>

            <div class="d-flex gap-2">
                <a href="#">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 0.3125C4.64813 0.3125 0.3125 4.64875 0.3125 10C0.3125 15.3512 4.64875 19.6875 10 19.6875C15.3519 19.6875 19.6875 15.3512 19.6875 10C19.6875 4.64875 15.3512 0.3125 10 0.3125ZM14.7581 6.94938L13.1681 14.4419C13.0506 14.9731 12.7344 15.1019 12.2931 14.8519L9.87125 13.0669L8.70312 14.1919C8.57438 14.3206 8.465 14.43 8.215 14.43L8.38688 11.965L12.875 7.91C13.0706 7.73812 12.8319 7.64062 12.5737 7.8125L7.02688 11.3044L4.63625 10.5581C4.11688 10.3944 4.105 10.0387 4.74563 9.78875L14.0856 6.18688C14.5194 6.03063 14.8981 6.2925 14.7575 6.94875L14.7581 6.94938Z"
                            fill="#505050"
                        />
                    </svg>
                </a>
                <a href="#">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_6_330)">
                            <path
                                d="M10 20C15.5229 20 20 15.5229 20 10C20 4.47708 15.5229 0 10 0C4.47708 0 0 4.47708 0 10C0 15.5229 4.47708 20 10 20Z"
                                fill="#505050"
                            />
                            <path
                                d="M5.68761 5.48706V8.88873C6.20552 8.27123 6.82636 7.96039 7.54636 7.96039C7.91719 7.96039 8.24927 8.03123 8.54719 8.17164C8.84594 8.31123 9.06927 8.49039 9.22011 8.70789C9.37177 8.92748 9.47427 9.16789 9.52969 9.43289C9.58469 9.69664 9.61219 10.1071 9.61219 10.6637V14.3008H8.00302V11.025C8.00302 10.375 7.97386 9.96331 7.91261 9.78831C7.85522 9.61688 7.74138 9.46999 7.58969 9.37164C7.43469 9.26706 7.24177 9.21539 7.00886 9.21539C6.74219 9.21539 6.50302 9.28206 6.29511 9.41456C6.08261 9.54789 5.93011 9.74706 5.83344 10.0133C5.73511 10.28 5.68594 10.6737 5.68761 11.195L5.68594 14.3008H4.07886V5.48706H5.68802H5.68761ZM12.0239 5.48706V8.88873C12.5422 8.27123 13.1626 7.96039 13.8822 7.96039C14.2518 7.96039 14.5864 8.03123 14.8847 8.17164C15.1822 8.31123 15.4055 8.49039 15.5555 8.70789C15.7069 8.92602 15.8122 9.17271 15.8651 9.43289C15.9205 9.69664 15.948 10.1071 15.948 10.6637V14.3008H14.3405V11.025C14.3405 10.375 14.3101 9.96331 14.2489 9.78831C14.1915 9.61665 14.0773 9.46968 13.9251 9.37164C13.7718 9.26706 13.5772 9.21539 13.3443 9.21539C13.078 9.21539 12.8389 9.28206 12.6305 9.41456C12.4209 9.54789 12.2676 9.74706 12.1697 10.0133C12.073 10.28 12.0239 10.6737 12.0239 11.195V14.3008H10.4168V5.48706H12.0239Z"
                                fill="white"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_6_330">
                                <rect
                                    width="20"
                                    height="20"
                                    fill="white"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a href="#">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 19.3091C15.1413 19.3091 19.3091 15.1413 19.3091 10C19.3091 4.85874 15.1413 0.690918 10 0.690918C4.85874 0.690918 0.690918 4.85874 0.690918 10C0.690918 15.1413 4.85874 19.3091 10 19.3091Z"
                            fill="#505050"
                        />
                        <path
                            d="M5.88716 6.58909C5.88716 6.58909 7.36352 8.25818 9.80716 8.53091C9.80716 8.53091 9.6908 7.13455 10.9308 6.35637C10.9308 6.35637 12.2108 5.50182 13.1817 6.74546C13.1817 6.74546 14.1126 6.55273 14.4617 6.32C14.4617 6.32 14.189 6.84728 13.7235 7.30182L14.7708 7.09455L13.7999 8.14182C13.7999 8.14182 14.189 11.6727 10.3272 13.5345C10.3272 13.5345 7.31989 14.6218 5.22534 13.1855C5.22534 13.1855 7.78534 12.7964 8.05807 12.2145C8.05807 12.2145 6.69807 12.0582 6.34898 10.8945L7.08716 10.8545C7.08716 10.8545 5.80716 10.7382 5.6508 8.91273L6.50534 9.02909C6.50898 9.03273 5.14898 8.64728 5.88716 6.58909Z"
                            fill="white"
                        />
                    </svg>
                </a>
            </div>
        </div>

        <!-- Навигация в профиле -->
        <div class="d-flex flex-column gap-3 py-3 bg-white">
            <div
                class="d-flex justify-content-between align-items-center px-3"
            >
                <h6 class="m-0 fs-7">Navigation</h6>
                <svg
                    class="cursor-pointer"
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.266357 6.86655C0.266357 7.01655 0.32469 7.15821 0.441357 7.26655C0.666357 7.46655 1.00802 7.44988 1.20802 7.23321L5.99161 1.9256L10.6166 7.26657C10.8166 7.49157 11.1583 7.4999 11.3833 7.2999C11.5999 7.0999 11.6166 6.75824 11.4166 6.53324L6.42494 0.783936C6.19161 0.525602 5.79161 0.525602 5.55827 0.783936L0.408023 6.49988C0.308023 6.60821 0.266357 6.73321 0.266357 6.86655Z"
                        fill="#505050"
                    />
                </svg>
            </div>
            <div class="border-bottom"></div>
            <a
                href="#profile"
                class="d-flex gap-3 mx-3 text-decoration-none c-black"
            >
                <svg
                    width="16"
                    height="18"
                    viewBox="0 0 16 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.56456 4.96802C3.26365 2.32002 5.33497 0 8.00002 0C10.6651 0 12.7364 2.32002 12.4355 4.96803L12.1734 7.27398C11.9322 9.39657 10.1363 11 8.00002 11C5.86377 11 4.06781 9.39656 3.8266 7.27398L3.56456 4.96802ZM11.1438 4.82124L10.8817 7.1272C10.7152 8.59283 9.47509 9.7 8.00002 9.7C6.52495 9.7 5.28484 8.59283 5.11829 7.1272L4.85625 4.82124C4.64297 2.94439 6.11108 1.3 8.00002 1.3C9.88895 1.3 11.3571 2.94439 11.1438 4.82124Z"
                        fill="#505050"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M0.289257 16.6984C0.899307 13.9532 3.33419 12 6.14638 12H9.85366C12.6658 12 15.1007 13.9532 15.7108 16.6984L15.8107 17.1481C15.9079 17.5853 15.5752 18 15.1274 18H0.872647C0.424824 18 0.0921699 17.5853 0.189317 17.1481L0.289257 16.6984ZM9.85366 13.3C11.9595 13.3 13.7953 14.6982 14.3704 16.7H1.62966C2.20474 14.6982 4.04051 13.3 6.14638 13.3H9.85366Z"
                        fill="#505050"
                    />
                </svg>
                My profile
            </a>
            <a
                href="#"
                class="d-flex justify-content-between mx-3 text-decoration-none c-black"
            >
                <div class="d-flex gap-3">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M0.00437927 5.64713L0.00784476 2.55458C0.140905 1.13281 2.55069 0 5.50392 0C5.7274 0 5.94777 0.00648684 6.16427 0.0190949C8.73257 0.167784 10.7561 1.1677 10.9795 2.41506C10.9888 2.46123 10.9956 2.50775 11 2.55458L11 4.92896C11 5.27842 10.706 5.55582 10.3565 5.5604C10.0003 5.56507 9.7 5.28487 9.7 4.92857V4.35282C8.69112 4.92606 7.18393 5.29 5.5 5.29C3.81957 5.29 2.31515 4.92757 1.3063 4.35639L1.30519 5.64713H1.30695C1.32232 5.6915 1.42964 5.98563 2.17866 6.34585C2.81675 6.65273 3.9668 6.92628 5.11016 7.01738C5.24612 7.02822 5.38164 7.03614 5.51619 7.04132C5.80146 7.05229 5.91425 7.59022 5.74066 7.81686C5.49853 8.13301 5.18181 8.33502 4.7855 8.29613C3.43867 8.16397 2.18795 7.79329 1.30378 7.28559L1.30261 8.64713H1.30694C1.32231 8.6915 1.42964 8.98563 2.17865 9.34585C2.74625 9.61883 3.78971 9.83534 4.7863 9.93403C5.1323 9.96829 5.40538 10.2534 5.40538 10.6011C5.40538 10.972 5.09566 11.2699 4.7266 11.2324C3.4039 11.0978 2.17406 10.7442 1.30123 10.2563L1.30005 11.6228C1.30191 11.6301 1.30561 11.6413 1.31301 11.6571C1.32876 11.6907 1.36242 11.747 1.43061 11.8215C1.57204 11.9762 1.82374 12.1673 2.21539 12.3534C2.78025 12.6218 3.81773 12.8336 4.7992 12.9309C5.14515 12.9652 5.41815 13.2503 5.41815 13.5979C5.41815 13.969 5.10838 14.2669 4.73929 14.2291C2.24775 13.974 0.0665297 12.9347 0 11.681L0.00515094 5.68851C0.00463742 5.67473 0.00437942 5.66094 0.00437927 5.64713ZM8.76002 1.92228C8.09246 1.61092 7.16187 1.37849 6.08112 1.31644C5.89249 1.30568 5.69924 1.30004 5.50197 1.3C4.17666 1.30025 3.03115 1.55692 2.24782 1.92228C1.85619 2.10494 1.59884 2.29423 1.45003 2.4509C1.37799 2.52674 1.34022 2.58557 1.3214 2.62283C1.3149 2.63569 1.3106 2.64604 1.30776 2.65405L1.30776 2.65898C1.33747 2.73351 1.48101 3.01031 2.17433 3.34373C2.95819 3.7207 4.13243 3.99 5.5 3.99C6.86757 3.99 8.04181 3.7207 8.82567 3.34373C9.56898 2.98627 9.68037 2.69389 9.69706 2.64607C9.69442 2.6395 9.69097 2.63177 9.68645 2.62283C9.66762 2.58557 9.62985 2.52674 9.55782 2.4509C9.40901 2.29423 9.15165 2.10494 8.76002 1.92228Z"
                            fill="#505050"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6.94908 15.3163L6.94908 12.4271C6.94678 12.3957 6.94562 12.3641 6.94562 12.3324H6.94908L6.94908 9.28429C6.95242 9.248 6.95719 9.2119 6.96335 9.17599C7.12397 7.78449 9.52115 6.67993 12.4548 6.67993C15.4923 6.67993 17.9548 7.86414 17.9548 9.32493C17.9548 9.38714 17.9503 9.44884 17.9415 9.50997L17.9491 15.3163C17.8723 16.7894 15.4393 17.9718 12.4491 17.9718C9.4589 17.9718 7.02586 16.7894 6.94908 15.3163ZM8.26475 9.34433C8.32223 9.22334 8.5253 8.93432 9.19723 8.61522C9.97883 8.24404 11.1221 7.98326 12.4452 7.98326C13.7682 7.98326 14.9115 8.24404 15.6931 8.61522C16.4086 8.95501 16.5925 9.26071 16.635 9.36571C16.5848 9.46688 16.4075 9.72212 15.7805 10.0237C14.9966 10.4006 13.8224 10.6699 12.4548 10.6699C11.0872 10.6699 9.91297 10.4006 9.12911 10.0237C8.4516 9.69784 8.29908 9.4261 8.26475 9.34433ZM8.24908 11.0295C9.25799 11.6046 10.7677 11.9699 12.4548 11.9699C14.1325 11.9699 15.6347 11.6087 16.6435 11.0391L16.6452 12.3324H16.6426C16.6272 12.3767 16.5199 12.6709 15.7709 13.0311C14.9871 13.4081 13.8129 13.6774 12.4454 13.6774C11.0779 13.6774 9.90372 13.4081 9.1199 13.0311C8.384 12.6772 8.26752 12.3871 8.24908 12.3349V11.0295ZM12.4454 14.9774C10.7635 14.9774 9.25791 14.6143 8.24908 14.0422V15.2571C8.26348 15.3138 8.38237 15.6438 9.17271 16.0262C9.95412 16.4042 11.1088 16.6718 12.4491 16.6718C13.7893 16.6718 14.944 16.4042 15.7255 16.0262C16.5144 15.6445 16.6343 15.315 16.649 15.2574L16.6474 14.0389C15.6386 14.6129 14.1305 14.9774 12.4454 14.9774Z"
                            fill="#505050"
                        />
                    </svg>
                    Balance
                </div>
                <div class="c-second">$1,430</div>
            </a>
            <a
                href="#"
                class="d-flex justify-content-between mx-3 text-decoration-none c-black"
            >
                <div class="d-flex gap-3">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M16.6186 1.34691L18.6531 3.38145L16.6186 5.41599L14.5841 3.38145L16.6186 1.34691ZM15.7795 0.347589C16.2429 -0.115863 16.9943 -0.115863 17.4578 0.347589L19.6525 2.5423C20.1159 3.00575 20.1159 3.75715 19.6525 4.2206L17.4578 6.41531C16.9943 6.87877 16.2429 6.87877 15.7795 6.41531L13.5847 4.2206C13.1213 3.75715 13.1213 3.00575 13.5847 2.5423L15.7795 0.347589ZM5.10601 1.68144L1.70601 1.68144L1.70601 5.08144H5.10601V1.68144ZM16.6186 14.9266C15.6797 14.9266 14.9186 15.6877 14.9186 16.6266C14.9186 17.5655 15.6797 18.3266 16.6186 18.3266C17.5575 18.3266 18.3186 17.5655 18.3186 16.6266C18.3186 15.6877 17.5575 14.9266 16.6186 14.9266ZM0.406006 1.68144C0.406006 0.963469 0.988036 0.381439 1.70601 0.381439H5.10601C5.82398 0.381439 6.40601 0.963469 6.40601 1.68144V5.08144C6.40601 5.79941 5.82398 6.38144 5.10601 6.38144H1.70601C0.988036 6.38144 0.406006 5.79941 0.406006 5.08144V1.68144ZM16.6186 13.6266C14.9617 13.6266 13.6186 14.9698 13.6186 16.6266C13.6186 18.2835 14.9617 19.6266 16.6186 19.6266C18.2754 19.6266 19.6186 18.2835 19.6186 16.6266C19.6186 14.9698 18.2754 13.6266 16.6186 13.6266Z"
                            fill="#505050"
                        />
                        <path
                            d="M16.6185 8.0586C16.9775 8.0586 17.2685 8.34962 17.2685 8.7086V11.6722C17.2685 12.0311 16.9775 12.3222 16.6185 12.3222C16.2595 12.3222 15.9685 12.0311 15.9685 11.6722V8.7086C15.9685 8.34962 16.2595 8.0586 16.6185 8.0586Z"
                            fill="#505050"
                        />
                        <path
                            d="M8.35707 2.73141C7.99808 2.73141 7.70707 3.02243 7.70707 3.38141C7.70707 3.7404 7.99808 4.03141 8.35707 4.03141H11.2875C11.6465 4.03141 11.9375 3.7404 11.9375 3.38141C11.9375 3.02243 11.6465 2.73141 11.2875 2.73141H8.35707Z"
                            fill="#505050"
                        />
                        <path
                            d="M9.73998 15.9585L8.22699 14.4965C7.97315 14.2426 7.97315 13.8311 8.22699 13.5772C8.48083 13.3234 8.89239 13.3234 9.14623 13.5772L12.1222 16.1489C12.376 16.4027 12.376 16.8142 12.1222 17.0681L9.15405 19.6319C8.9002 19.8857 8.48865 19.8857 8.23481 19.6319C7.98096 19.3781 7.98096 18.9665 8.23481 18.7127L9.73904 17.2594H6.41162C4.39578 17.2594 2.76162 15.6252 2.76162 13.6094V8.33203C2.76162 7.97305 3.05264 7.68203 3.41162 7.68203C3.77061 7.68203 4.06162 7.97305 4.06162 8.33203V13.6094C4.06162 14.9072 5.11375 15.9594 6.41162 15.9594L9.73998 15.9585Z"
                            fill="#505050"
                        />
                    </svg>
                    Connections
                </div>
                <div>
                    <span
                        class="badge rounded-pill bg-danger fw-normal lh-sm"
                    >
                        29
                    </span>
                </div>
            </a>
            <a
                href="#"
                class="d-flex gap-3 mx-3 text-decoration-none c-black"
            >
                <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.82765 0C5.16261 0 3.09129 2.32002 3.3922 4.96802L3.65424 7.27398C3.89544 9.39656 5.69141 11 7.82765 11C9.9639 11 11.7599 9.39657 12.0011 7.27398L12.2631 4.96803C12.564 2.32002 10.4927 0 7.82765 0ZM10.7094 7.1272L10.9714 4.82124C11.1847 2.94439 9.71659 1.3 7.82765 1.3C5.93872 1.3 4.47061 2.94439 4.68389 4.82124L4.94593 7.1272C5.11248 8.59283 6.35258 9.7 7.82765 9.7C9.30272 9.7 10.5428 8.59283 10.7094 7.1272Z"
                        fill="#505050"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5.97402 12C3.16182 12 0.726944 13.9532 0.116894 16.6984L0.0169532 17.1481C-0.0801933 17.5853 0.25246 18 0.700284 18H14.955C15.4028 18 15.7355 17.5853 15.6384 17.1481L15.5384 16.6984C14.9284 13.9532 12.4935 12 9.68129 12H5.97402ZM14.198 16.7C13.6229 14.6982 11.7872 13.3 9.68129 13.3H5.97402C3.86815 13.3 2.03238 14.6982 1.45729 16.7H14.198Z"
                        fill="#505050"
                    />
                    <path
                        d="M12.1723 11C11.7922 11 11.6567 10.5382 11.8947 10.2419C11.9416 10.1835 11.9873 10.1241 12.0319 10.0638C12.196 9.84152 12.4473 9.7003 12.7187 9.64845C13.9438 9.41439 14.9086 8.40758 15.0541 7.1272L15.3161 4.82124C15.497 3.22931 14.4683 1.80463 12.9991 1.40876C12.6467 1.31378 12.3183 1.12676 12.0889 0.84284C12.0392 0.781436 11.9884 0.721054 11.9363 0.661734C11.7152 0.409917 11.8373 0 12.1723 0C14.8374 0 16.9087 2.32002 16.6078 4.96803L16.3458 7.27398C16.1046 9.39657 14.3086 11 12.1723 11Z"
                        fill="#505050"
                    />
                    <path
                        d="M17.3143 18C16.9716 18 16.7274 17.6484 16.7236 17.3058C16.7202 16.9919 16.9448 16.7 17.2587 16.7H18.5427C18.1057 15.1788 16.9407 14.0062 15.4824 13.5308C15.2738 13.4628 15.0977 13.3644 14.9626 13.1914C14.5991 12.726 14.9161 12.0365 15.4889 12.1804C17.65 12.7232 19.382 14.4437 19.8831 16.6984L19.983 17.1481C20.0802 17.5853 19.7475 18 19.2997 18H17.3143Z"
                        fill="#505050"
                    />
                </svg>
                Friends
            </a>
            <div class="border-bottom"></div>
            <a
                href="#"
                class="d-flex justify-content-between mx-3 text-decoration-none c-black"
            >
                <div class="d-flex gap-3">
                    <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.88002 11.65C4.13104 11.65 3.53002 12.251 3.53002 13V14.32C3.53002 15.069 4.13104 15.67 4.88002 15.67H7.20002C7.94901 15.67 8.55002 15.069 8.55002 14.32V13C8.55002 12.251 7.94901 11.65 7.20002 11.65H4.88002ZM4.83002 13C4.83002 12.9812 4.83633 12.9705 4.84339 12.9634C4.85046 12.9563 4.86122 12.95 4.88002 12.95H7.20002C7.21883 12.95 7.22959 12.9563 7.23665 12.9634C7.24372 12.9705 7.25002 12.9812 7.25002 13V14.32C7.25002 14.3388 7.24372 14.3496 7.23665 14.3566C7.22959 14.3637 7.21883 14.37 7.20002 14.37H4.88002C4.86122 14.37 4.85046 14.3637 4.84339 14.3566C4.83633 14.3496 4.83002 14.3388 4.83002 14.32V13Z"
                            fill="#505050"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M4.78998 1.60001C4.78998 1.24103 4.49896 0.950012 4.13998 0.950012C3.78099 0.950012 3.48998 1.24103 3.48998 1.60001V2.99002H3C1.34 2.99002 0 4.33002 0 5.99002V16.12C0 17.78 1.34 19.12 3 19.12H13C14.66 19.12 16 17.78 16 16.12V5.99002C16 4.33002 14.65 2.99002 13 2.99002H12.5V1.60001C12.5 1.24103 12.209 0.950012 11.85 0.950012C11.491 0.950012 11.2 1.24103 11.2 1.60001V2.99002H8.64999V1.60001C8.64999 1.24103 8.35898 0.950012 7.99999 0.950012C7.64101 0.950012 7.34999 1.24103 7.34999 1.60001V2.99002H4.78998V1.60001ZM3.48998 4.29002V5.86001C3.48998 6.219 3.78099 6.51001 4.13998 6.51001C4.49896 6.51001 4.78998 6.219 4.78998 5.86001V4.29002H7.34999V5.86001C7.34999 6.219 7.64101 6.51001 7.99999 6.51001C8.35898 6.51001 8.64999 6.219 8.64999 5.86001V4.29002H11.2V5.86001C11.2 6.219 11.491 6.51001 11.85 6.51001C12.209 6.51001 12.5 6.219 12.5 5.86001V4.29002H13C13.94 4.29002 14.7 5.05002 14.7 5.99002V8.35003H1.3V5.99002C1.3 5.05002 2.06 4.29002 3 4.29002H3.48998ZM1.3 9.65003H14.7V16.12C14.7 17.06 13.94 17.82 13 17.82H3C2.06 17.82 1.3 17.06 1.3 16.12V9.65003Z"
                            fill="#505050"
                        />
                    </svg>
                    Events
                </div>
                <div>
                    <div
                        class="badge rounded-pill bg-success fw-normal lh-sm"
                    >
                        45
                    </div>
                </div>
            </a>
            <a
                href="#"
                class="d-flex gap-3 mx-3 text-decoration-none c-black"
            >
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M13.0001 9.00001C13.0001 11.2092 11.2092 13 9.00009 13C6.79095 13 5.00009 11.2092 5.00009 9.00001C5.00009 6.79087 6.79095 5.00001 9.00009 5.00001C11.2092 5.00001 13.0001 6.79087 13.0001 9.00001ZM11.7001 9.00001C11.7001 10.4912 10.4913 11.7 9.00009 11.7C7.50892 11.7 6.30009 10.4912 6.30009 9.00001C6.30009 7.50885 7.50892 6.30001 9.00009 6.30001C10.4913 6.30001 11.7001 7.50885 11.7001 9.00001Z"
                        fill="#505050"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M7.98315 0.00494385C7.09743 0.00494385 6.34736 0.658095 6.22559 1.5354C6.07458 2.6234 4.93986 3.27853 3.92212 2.86531C3.10146 2.53211 2.16078 2.85512 1.71793 3.62217L0.761191 5.27928C0.323707 6.03703 0.503885 7.00057 1.18562 7.54902C2.06722 8.25827 2.05272 9.62605 1.14762 10.3307C0.448735 10.8748 0.258123 11.851 0.700981 12.618L1.65772 14.2751C2.0952 15.0329 3.01974 15.3586 3.83558 15.0424C4.89061 14.6336 6.06789 15.33 6.22559 16.4662C6.34736 17.3435 7.09743 17.9966 7.98315 17.9966H9.89662C10.7716 17.9966 11.5159 17.3588 11.6501 16.4942C11.8324 15.3184 13.0551 14.6125 14.1646 15.0424C14.9804 15.3586 15.905 15.0329 16.3425 14.2751L17.2992 12.618C17.7421 11.851 17.5514 10.8748 16.8526 10.3307C15.9475 9.62605 15.933 8.25827 16.8146 7.54902C17.4963 7.00057 17.6765 6.03703 17.239 5.27929L16.2823 3.62217C15.8394 2.85512 14.8987 2.53211 14.0781 2.86531C13.0153 3.29682 11.8235 2.62549 11.6501 1.50738C11.5159 0.642753 10.7716 0.00494385 9.89662 0.00494385H7.98315ZM7.51325 1.71413C7.5458 1.47957 7.74634 1.30494 7.98315 1.30494L9.89662 1.30494C10.1306 1.30494 10.3296 1.47547 10.3654 1.70663C10.6698 3.66888 12.7417 4.81096 14.5671 4.06981C14.7865 3.98073 15.038 4.06709 15.1564 4.27217L16.1132 5.92928C16.2301 6.13187 16.182 6.38948 15.9997 6.53612C14.4525 7.78082 14.4994 10.1462 16.054 11.3565C16.2408 11.502 16.2918 11.7629 16.1734 11.968L15.2166 13.6251C15.0997 13.8277 14.8525 13.9148 14.6344 13.8303C12.7508 13.1003 10.675 14.2988 10.3654 16.295C10.3296 16.5261 10.1305 16.6966 9.89662 16.6966H7.98315C7.74634 16.6966 7.5458 16.522 7.51325 16.2875C7.24239 14.336 5.21735 13.1127 3.36582 13.8303C3.1477 13.9148 2.90052 13.8277 2.78355 13.6251L1.82681 11.968C1.70841 11.7629 1.75937 11.502 1.94623 11.3565C3.50078 10.1462 3.54768 7.78082 2.0005 6.53612C1.81823 6.38948 1.77006 6.13187 1.88702 5.92928L2.84376 4.27217C2.96216 4.06709 3.21366 3.98073 3.43307 4.06981C5.23581 4.80175 7.24576 3.64132 7.51325 1.71413Z"
                        fill="#505050"
                    />
                </svg>
                Account settings</a
            >
        </div>

        <!-- Поделиться -->
        <div class="bg-white">
            <div
                class="d-flex justify-content-between p-3 border-bottom"
            >
                <h6 class="m-0 fs-7">Share your thoughts</h6>
                <svg
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.266357 6.86655C0.266357 7.01655 0.32469 7.15821 0.441357 7.26655C0.666357 7.46655 1.00802 7.44988 1.20802 7.23321L5.99161 1.9256L10.6166 7.26657C10.8166 7.49157 11.1583 7.4999 11.3833 7.2999C11.5999 7.0999 11.6166 6.75824 11.4166 6.53324L6.42494 0.783936C6.19161 0.525602 5.79161 0.525602 5.55827 0.783936L0.408023 6.49988C0.308023 6.60821 0.266357 6.73321 0.266357 6.86655Z"
                        fill="#505050"
                    />
                </svg>
            </div>
            <div class="px-3 pt-2">
                <textarea
                    type="text"
                    class="form-control no-resize px-3 py-2"
                    placeholder="Enter your message..."
                ></textarea>
            </div>
            <div class="p-3 pt-2">
                <button class="w-100 btn btn-primary btn-block">
                    Save
                </button>
            </div>
        </div>
    </div>
</div>
    `;
};
