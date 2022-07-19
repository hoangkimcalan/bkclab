import AnhNT from "../assets/mem/AnhNT.png";
import AnhTN from "../assets/mem/AnhTN.png";
import DaoTQ from "../assets/mem/DaoTQ.png";
import DucNM from "../assets/mem/DucNM.png";
import DungLT from "../assets/mem/DungLT.png";
import HungTM from "../assets/mem/HungTM.png";
import HungVH from "../assets/mem/HungVH.png";
import KhangTD from "../assets/mem/KhangTD.png";
import KyNV from "../assets/mem/KyNV.png";
import LinhTT from "../assets/mem/LinhTT.png";
import LongNV from "../assets/mem/LongNV.png";
import LongLT from "../assets/mem/LongLT.png";
import NamDH from "../assets/mem/NamDH.png";
import QuynhPT from "../assets/mem/QuynhPT.png";
import ThangNV from "../assets/mem/ThangNV.png";
import TruongND from "../assets/mem/TruongND.png";
import TuanNM from "../assets/mem/TuanNM.png";
import UngLH from "../assets/mem/UngLH.png";
import TLam from "../assets/mem/TLam.png";
import TChung from "../assets/mem/TChung.png";
import TMinh from "../assets/mem/TMinh.png";

export const datamembers = [
    { id: 21, name: "Nguyễn Bình Minh", genres_id: [0, 1], srcImg: TMinh},
    { id: 20, name: "Đào Thành Chung", genres_id: [0, 1], srcImg: TChung},
    { id: 19, name: "Đỗ Bá Lâm", genres_id: [0, 1], srcImg: TLam},
    { id: 13, name: "Đinh Hoàng Nam", genres_id: [0,1, 6], srcImg: NamDH},
    { id: 1, name: "Nguyễn Thị Ngọc Ánh", genres_id: [0, 2], srcImg: AnhNT },
    { id: 2, name: "Trần Nguyễn Hoàng Anh", genres_id: [0, 3], srcImg: AnhTN },
    { id: 3, name: "Trần Quang Đạo", genres_id: [0], srcImg: DaoTQ },
    { id: 4, name: "Nguyễn Minh Đức", genres_id: [0, 5], srcImg: DucNM },
    { id: 5, name: "Lương Viết Dũng", genres_id: [0], srcImg: DungLT },
    { id: 6, name: "Trần Mạnh Hùng", genres_id: [0, 4], srcImg: HungTM},
    { id: 7, name: "Vương Hữu Hưng", genres_id: [0, 6], srcImg: HungVH},
    { id: 8, name: "Trịnh Đình Khang", genres_id: [0], srcImg: KhangTD},
    { id: 9, name: "Nguyễn Văn Kỳ", genres_id: [0], srcImg: KyNV},
    { id: 10, name: "Trần Thùy Linh", genres_id: [0, 3], srcImg: LinhTT},
    { id: 11, name: "Ngô Văn Long", genres_id: [0, 4], srcImg: LongNV},
    { id: 12, name: "Lê Thành Long", genres_id: [0, 5], srcImg: LongLT},
    { id: 14, name: "Phạm Thị Hương Quỳnh", genres_id: [0, 8], srcImg: QuynhPT},
    { id: 15, name: "Nghiêm Việt Thắng", genres_id: [0, 6], srcImg: ThangNV},
    { id: 16, name: "Nguyễn Đình Trường", genres_id: [0, 6], srcImg: TruongND},
    { id: 17, name: "Nguyễn Minh Tuấn", genres_id: [0], srcImg: TuanNM},
    { id: 18, name: "Lê Hồng Ưng", genres_id: [0, 8], srcImg: UngLH},
];

export const genres = [
    {
        id: 0,
        description: "Tất cả thành viên"
    },
    {
        id: 1,
        description: "Thành viên chính"
    },
    {
        id: 2,
        description: "Marketing"
    },
    {
        id: 3,
        description: "Back Office"
    },
    {
        id: 4,
        description: "Front-end Developer"
    },
    {
        id: 5,
        description: "Back-end Developer"
    },
    {
        id: 6,
        description: "Blockchain Developer"
    },
    {
        id: 7,
        description: "UI/UX Design"
    },
    {
        id: 8,
        description: "Mobile Developer"
    },
    {
        id: 9,
        description: "Thực tập"
    },
]