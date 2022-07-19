import React from 'react';
import HeaderB4E from '../../assets/b4e_project.png';
import bodyB4E1 from '../../assets/bodyB4E1.png';
import bodyB4E2 from '../../assets/bodyB4E2.png';
import bodyB4E3 from '../../assets/bodyB4E3.png';
import bodyB4E4 from '../../assets/bodyB4E4.png';

function B4EProject() {
    return (
        <div className="md:px-44 px-4 mt-10 w-full h-auto">
            <div className="relative h-72 w-full bg-slate-100 rounded-md overflow-hidden">
                <img src={HeaderB4E} className="w-full h-full object-fill" alt="B4E" />
                <h1 className=" absolute z-50 items-center top-[30%] ml-10 text-[2.3rem] md:text-[2.5rem] font-bold tracking-wide">
                    Cấp phát, xác thực<br /> văn bằng B4E
                </h1>
            </div>

            <div className="mt-16 w-full h-auto flex flex-row gap-16">
                <div className="hidden md:block basis-1/4 bg-red-300">hello</div>
                <div className="basic-full md:basis-3/4 bg-white block justify-center">
                    <p className="italic">
                        Vấn nạn buôn bán và sử dụng bằng cấp, chứng chỉ giả hiện nay đang trở thành vấn đề nhức nhối trong xã hội nói chung và trong ngành giáo dục nói riêng. Các bằng cấp, chứng chỉ giả này được thiết kế hết sức tinh vi, khó có thể nhận ra bằng mắt thường. Hơn nữa, quá trình xác thực “bằng thật - bằng giả” thông qua Trung tâm Công nhận Văn bằng hay các trường đại học, cơ sở giáo dục có thủ tục rườm rà, tốn kém chi phí và thời gian vì phải trả qua một chuỗi các công đoạn giấy tờ thủ công, thậm chí nhiều trường hợp bằng giả vẫn có thể trót lọt.
                    </p>
                    <img src={bodyB4E1} className="mt-8 justify-center m-auto w-[250px] object-fill" />
                    <p className="">
                        Ngành giáo dục đất nước đang trong công cuộc chuyển đổi số mạnh mẽ, nhu cầu số hóa bằng cấp, chứng chỉ để có thể thuận tiện và dễ dàng quản lý cũng tăng cao. Cùng với đó là sự nổi lên của việc ứng dụng công nghệ chuỗi khối nhằm giải quyết các bài toán liên quan đến tính minh bạch, độ tin cậy.
                    </p>
                    <p className="mt-4">
                        Nắm bắt được những vấn đề nổi cộm của ngành giáo dục và xu hướng của thời đại công nghệ mới, BKC Labs đã nghiên cứu và cho ra đời giải pháp <mark className="font-bold bg-transparent">Cấp phát, xác thực bằng cấp/chứng chỉ B4E</mark> dựa trên nền tảng chữ ký số BSign và ứng dụng công nghệ blockchain.
                    </p>
                    <img src={bodyB4E2} className="mt-8 justify-center m-auto w-[250px] object-fill" />
                    <p className="ml-1 mt-6 font-bold">
                        • Cơ chế hoạt động của hệ thống B4E:
                    </p>
                    <p className="mt-4">
                        - Số hóa bằng cấp/chứng chỉ dưới dạng các file PDF và ghi nhận một mã định danh duy nhất ( thể hiện bằng mã QR) <br />
                        - Thực hiện ký số trên các file PDF đó bằng BSign. <br />
                        - Lưu trữ dữ liệu bằng cấp/chứng chỉ lên mạng blockchain dưới dạng mã Hash.
                    </p>
                    <p className="ml-1 mt-6 font-bold">
                        • B4E là giải pháp hữu hiệu cho ngành giáo dục bởi:
                    </p>
                    <p>
                        - Dữ liệu được lưu trữ vĩnh viễn, minh bạch và độ an toàn cao:
                    </p>
                    <p className="mt-4">
                        Công nghệ blockchain vận hành theo nguyên tắc phân cấp lưu trữ thông tin theo khối. Các thông tin trong mạng lưới được mã hóa kèm một mã thời gian và liên kết với các thông tin trước đó, khiến cho một dữ liệu khi đã được mạng lưới chấp nhận thì sẽ không thể thay đổi hay xóa đi.
                    </p>
                    <p className="mt-4">
                        Việc ứng dụng công nghệ này của B4E sẽ có thể ngăn chặn việc gian lận và đảm bảo tính minh bạch, an toàn thông tin của bằng cấp, chứng chỉ.
                    </p>
                    <p className="mt-4 ml-2">
                        - Văn bằng được xác thực ngay tức thì
                    </p>
                    <p className="mt-4">
                        Kết hợp với việc sử dụng công nghệ chữ ký số BSign, giải pháp B4E hướng tới mục tiêu kép là <mark className="font-bold bg-transparent">(1) Xác thực bằng cấp/chứng chỉ và (2) Xác thực danh tính tổ chức tham gia cấp phát bằng cấp/chứng chỉ</mark>. Từ đó, tạo điều kiện thuận lợi cho sinh viên, ứng viên và các nhà tuyển dụng lao động có thể kiểm tra, đối chiếu và xác nhận bằng mã QR ngay tức thì.
                    </p>
                    <p className="mt-4">
                        Chữ ký số từ xa BSign đã khắc phục hoàn toàn những bất cập và nhược điểm của chữ ký số thông thường với những ưu điểm:
                    </p>
                    <p className="mt-4 ml-2">
                        - Dễ dàng chia sẻ trên các nền tảng
                    </p>
                    <p className="mt-4">
                        Bằng cấp/chứng chỉ được số hóa thành file PDF nên chủ sở hữu có thể chia sẻ cho người khác và người dùng dễ dàng đọc và kiểm tra thông tin bằng các phần mềm PDF Reader như Adobe Reader, Foxit Reader,...
                    </p>
                    <img src={bodyB4E3} className="mt-8 justify-center m-auto w-[250px] object-fill" />
                    <p className="ml-1 mt-6 font-bold">
                        • Các tính năng B4E cung cấp
                    </p>
                    <p className="ml-2">
                        - Tạo các mẫu chứng chỉ/bằng cấp hoặc người dùng có thể tự tải lên template có sẵn của cơ sở mình. <br />
                        - Cấu hình chữ ký số cho từng mẫu chứng chỉ/bằng cấp <br />
                        - Lưu trữ dữ liệu lên mạng chuỗi khối <br />
                        - Trả kết quả các bằng cấp dưới dạng PDF có mã QR dựa trên template và dữ liệu từ file excel mà người dùng đã tải lên <br />
                        - Gửi email file PDF bằng cấp và các thông tin tới người sở hữu <br />
                        - Xác thực bằng cấp/chứng chỉ và danh tính cơ sở cấp phát
                    </p>
                    <img src={bodyB4E4} className="mt-8 justify-center m-auto w-full object-fill" />
                    <p className="mt-2">
                        Trong thời gian tới, trường Đại học Bách khoa Hà Nội sẽ sử dụng B4E để số hóa toàn bộ văn bằng/chứng chỉ của trường, xây dựng một hệ thống cấp phát và quản lý văn bằng số trong thời gian sớm nhất có thể và sẵn sàng chia sẻ cho các trường học, đơn vị giáo dục khác sử dụng.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default B4EProject;