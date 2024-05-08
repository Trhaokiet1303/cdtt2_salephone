function addTopNav() {
    document.write(`    
	<div class="top-nav group">
        <section>
            <div class="social-top-nav">
                <a class="fab fa-facebook-f"></a>
                <a class="fab fa-google"></a>
                <a class="fab fa-youtube"></a>
            </div> <!-- End Social Topnav -->
            <ul class="top-nav-quicklink flexContain">
                <li><a href="/">
                        <i class="fas fa-home"></i> Trang chủ</a></li>
                <li><a href="/gioithieu">
                        <i class="fas fa-info-circle"></i> Giới thiệu</a></li>
                <li><a href="/trungtambaohanh">
                        <i class="fas fa-wrench"></i> Bảo hành</a></li>
                <li><a href="/lienhe">
                        <i class="fas fa-phone"></i> Liên hệ</a></li>
            </ul> <!-- End Quick link -->
        </section><!-- End Section -->
    </div> <!-- End Top Nav -->`);
}

function addFooter() {
    document.write(`
    <div class="footer">
        <div class="box-container">
            <div class="box">
                <h3>Locations</h3>
                <a href="#">Vietnam</a>
                <a href="#">japan</a>
                <a href="#">Russia</a>
                <a href="#">USA</a>
            </div>
    
            <div class="box">
                <h3>Quick links</h3>
                <a href="#home">home</a>
                <a href="#dishes">phone</a>
                <a href="#about">about</a>
                <a href="#menu">menu</a>
                <a href="#review">reivew</a>
                <a href="#order">imformation</a>
            </div>
    
            <div class="box">
                <h3>Contact info</h3>
                <a href="#"><i class="fas fa-phone"></i>0377-289-656</a>
                <a href="#"><i class="fas fa-envelope"></i>BTL@gmail.com</a>
                <a href="#">hanoi, vietnam</a>
            </div>
    
            <div class="box">
                <h3>Follow us</h3>
                <a href="https://www.facebook.com/misao69" target="_blank" href="#"><i class="fab fa-facebook"></i>facebook</a>
                <a href="#"><i class="fab fa-twitter" target="_blank" ></i>twitter</a>
                <a href="https://www.instagram.com/nsv_174/?fbclid=IwAR35o78QvkLwBWrPM9F3beRnlu9bAIPSb55E5gh1W2U5UrEvzvTpWI8q4HQ" target="_blank" href="#"><i class="fab fa-instagram"></i>instagram</a>
                <a href="#"><i class="fab fa-linkedin"></i>linkedin</a>
            </div>
    
            <div class="box">
                <h3>Customer Care</h3>
                <a href="#">Help Center</a>
                <a href="#">TickID Mall</a>
                <a href="#">Shopping Guide</a>
            </div>
        </div>
    
        <div class="credit"> copyright @ 2023 by <span> Chuyên đề thực tế 2</span></div>
    </div>`)};

function addContainTaiKhoan() {
    document.write(`
    <div class="containTaikhoan">
        <span class="close" onclick="showTaiKhoan(false);">&times;</span>
        <div class="taikhoan">

            <ul class="tab-group">
                <li class="tab active"><a href="#login">Đăng nhập</a></li>
                <li class="tab"><a href="#signup">Đăng kí</a></li>
            </ul> <!-- /tab group -->

            <div class="tab-content">
                <div id="login">
                    <h1>Chào mừng bạn trở lại!</h1>

                    <form onsubmit="return logIn(this);">

                        <div class="field-wrap">
                            <label>
                                Tên đăng nhập<span class="req">*</span>
                            </label>
                            <input name='username' type="text" required autocomplete="off" />
                        </div> <!-- /user name -->

                        <div class="field-wrap">
                            <label>
                                Mật khẩu<span class="req">*</span>
                            </label>
                            <input name="pass" type="password" required autocomplete="off" />
                        </div> <!-- pass -->

                        <p class="forgot"><a href="#">Quên mật khẩu?</a></p>

                        <button type="submit" class="button button-block" />Tiếp tục</button>

                    </form> <!-- /form -->

                </div> <!-- /log in -->

                <div id="signup">
                    <h1>Đăng kí miễn phí</h1>

                    <form onsubmit="return signUp(this);">

                        <div class="top-row">
                            <div class="field-wrap">
                                <label>
                                    Họ<span class="req">*</span>
                                </label>
                                <input name="ho" type="text" required autocomplete="off" />
                            </div>

                            <div class="field-wrap">
                                <label>
                                    Tên<span class="req">*</span>
                                </label>
                                <input name="ten" type="text" required autocomplete="off" />
                            </div>
                        </div> <!-- / ho ten -->

                        <div class="field-wrap">
                            <label>
                                Địa chỉ Email<span class="req">*</span>
                            </label>
                            <input name="email" type="email" required autocomplete="off" />
                        </div> <!-- /email -->

                        <div class="field-wrap">
                            <label>
                                Tên đăng nhập<span class="req">*</span>
                            </label>
                            <input name="newUser" type="text" required autocomplete="off" />
                        </div> <!-- /user name -->

                        <div class="field-wrap">
                            <label>
                                Mật khẩu<span class="req">*</span>
                            </label>
                            <input name="newPass" type="password" required autocomplete="off" />
                        </div> <!-- /pass -->

                        <button type="submit" class="button button-block" />Tạo tài khoản</button>

                    </form> <!-- /form -->

                </div> <!-- /sign up -->
            </div><!-- tab-content -->

        </div> <!-- /taikhoan -->
    </div>`);
}