// Cấu trúc cho một câu hỏi trắc nghiệm
export interface Question {
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

// Dữ liệu câu hỏi Chương 4: Dân chủ XHCN và Nhà nước XHCN
export const questions: Question[] = [
    {
        question: "Thuật ngữ \"dân chủ\" ra đời vào khoảng thời gian nào?",
        options: ["Thế kỷ VIII - VII TCN", "Thế kỷ VII - VI TCN", "Thế kỷ V - IV TCN", "Đầu Công nguyên"],
        correctAnswer: 1,
        explanation: "Các nhà tư tưởng Hy Lạp cổ đại đã dùng cụm từ \"demokratos\" để nói đến quyền lực thuộc về nhân dân."
    },
    {
        question: "\"Demos\" trong tiếng Hy Lạp cổ đại có nghĩa là gì?",
        options: ["Nhân dân", "Cai trị", "Nhà nước", "Pháp luật"],
        correctAnswer: 0,
        explanation: "\"Demos\" là nhân dân (danh từ), \"kratos\" là cai trị (động từ)."
    },
    {
        question: "Theo chủ nghĩa Mác - Lênin, dân chủ là một giá trị xã hội phản ánh quyền cơ bản của con người, đây là phương diện nào?",
        options: ["Phương diện quyền lực", "Phương diện chế độ xã hội", "Phương diện giá trị nhân văn", "Phương diện tổ chức quản lý"],
        correctAnswer: 2,
        explanation: "Dân chủ là sản phẩm của quá trình đấu tranh giai cấp vì những giá trị tiến bộ của nhân loại."
    },
    {
        question: "Dân chủ được coi là một \"phạm trù vĩnh viễn\" khi hiểu theo nghĩa nào?",
        options: ["Một hình thái nhà nước", "Một chế độ chính trị", "Một giá trị nhân loại chung", "Một phương thức quản lý xã hội"],
        correctAnswer: 2,
        explanation: "Chừng nào con người còn tồn tại, văn minh chưa bị diệt vong thì dân chủ vẫn tồn tại như một giá trị chung."
    },
    {
        question: "Dân chủ là một \"phạm trù lịch sử\" gắn liền với yếu tố nào?",
        options: ["Sự xuất hiện của loài người", "Sự tồn tại của nhà nước", "Sự ra đời của sản xuất công nghiệp", "Sự xuất hiện của giai cấp tư sản"],
        correctAnswer: 1,
        explanation: "Dân chủ với tư cách một hình thái nhà nước sẽ mất đi khi nhà nước tiêu vong."
    },
    {
        question: "Hình thức dân chủ đầu tiên trong lịch sử nhân loại là:",
        options: ["Dân chủ tư sản", "Dân chủ chủ nô", "Dân chủ nguyên thủy (dân chủ quân sự)", "Dân chủ xã hội chủ nghĩa"],
        correctAnswer: 2,
        explanation: "Xuất hiện trong xã hội tự quản của cộng đồng thị tộc, bộ lạc."
    },
    {
        question: "Đặc điểm của dân chủ nguyên thủy là gì?",
        options: ["Có bộ máy cưỡng chế chuyên nghiệp", "Nhân dân bầu ra thủ lĩnh thông qua \"Đại hội nhân dân\"", "Quyền lực tập trung vào tay vua chúa", "Thực hiện bằng văn bản pháp luật"],
        correctAnswer: 1,
        explanation: "Người dân có quyền lực thực sự, tham gia quyết định bằng cách giơ tay hoặc hoan hô."
    },
    {
        question: "Tại sao nền dân chủ chủ nô được gọi là nền dân chủ cho thiểu số?",
        options: ["Vì dân cư quá ít", "Vì người dân không muốn đi bầu cử", "Vì đại đa số là nô lệ không được coi là \"dân\"", "Vì chỉ dành cho phụ nữ"],
        correctAnswer: 2,
        explanation: "\"Dân\" chỉ gồm giai cấp chủ nô và công dân tự do, còn nô lệ không được tham gia vào công việc nhà nước."
    },
    {
        question: "Trong chế độ phong kiến, ý thức về dân chủ đã có bước tiến như thế nào?",
        options: ["Phát triển rực rỡ", "Được pháp luật bảo vệ chặt chẽ", "Không có bước tiến đáng kể nào", "Thay thế hoàn toàn chế độ độc tài"],
        correctAnswer: 2,
        explanation: "Sự thống trị của nhà nước chuyên chế phong kiến mang tính thần bí, xem việc tuân theo ý chí vua chúa là bổn phận."
    },
    {
        question: "Nền dân chủ tư sản ra đời là một bước tiến lớn vì:",
        options: ["Đề cao quyền tự do, bình đẳng của con người", "Xóa bỏ hoàn toàn sự bất bình đẳng giàu nghèo", "Trao quyền lực thực sự cho giai cấp công nhân", "Dựa trên chế độ công hữu"],
        correctAnswer: 0,
        explanation: "Nó thay thế chế độ độc tài phong kiến với những tư tưởng tiến bộ về tự do."
    },
    {
        question: "Hạn chế lớn nhất của nền dân chủ tư sản là gì?",
        options: ["Thiếu hệ thống pháp luật hành chính", "Không có các cuộc bầu cử", "Xây dựng trên nền tảng chế độ tư hữu tư liệu sản xuất", "Không cho phép nhân dân tham gia quân đội"],
        correctAnswer: 2,
        explanation: "Đây là nền dân chủ của thiểu số những người nắm giữ tư liệu sản xuất đối với đại đa số nhân dân lao động."
    },
    {
        question: "Nền dân chủ xã hội chủ nghĩa đầu tiên trên thế giới ra đời sau sự kiện nào?",
        options: ["Công xã Pari (1871)", "Cách mạng Tháng Mười Nga (1917)", "Cách mạng Tháng Tám (1945)", "Chiến tranh thế giới thứ hai"],
        correctAnswer: 1,
        explanation: "Đánh dấu bước phát triển mới về chất của dân chủ."
    },
    {
        question: "Bản chất chính trị của nền dân chủ xã hội chủ nghĩa là gì?",
        options: ["Đa đảng đối lập cạnh tranh quyền lực", "Sự lãnh đạo của giai cấp công nhân thông qua Đảng Cộng sản", "Sự quản lý tuyệt đối của các tập đoàn kinh tế", "Không mang tính giai cấp"],
        correctAnswer: 1,
        explanation: "Đảng lãnh đạo để đảm bảo quyền lực thực sự thuộc về nhân dân."
    },
    {
        question: "Bản chất kinh tế của nền dân chủ XHCN dựa trên sở hữu nào?",
        options: ["Sở hữu tư nhân về mọi mặt", "Sở hữu xã hội về những tư liệu sản xuất chủ yếu", "Sở hữu của các tổ chức phi chính phủ", "Sở hữu của cá nhân cán bộ nhà nước"],
        correctAnswer: 1,
        explanation: "Nhằm thỏa mãn nhu cầu vật chất và tinh thần của toàn thể nhân dân."
    },
    {
        question: "Nền dân chủ XHCN lấy hệ tư tưởng nào làm chủ đạo?",
        options: ["Hệ tư tưởng tư sản", "Hệ tư tưởng tôn giáo", "Hệ tư tưởng Mác - Lênin", "Hệ tư tưởng phong kiến"],
        correctAnswer: 2,
        explanation: "Đây là hệ tư tưởng của giai cấp công nhân, làm chủ đạo đối với các hình thái ý thức xã hội khác."
    },
    {
        question: "Theo V.I. Lênin, dân chủ XHCN có tính chất gì so với dân chủ tư sản?",
        options: ["Kém hiệu quả hơn", "Tương đương về chất", "Gấp triệu lần dân chủ tư sản", "Chỉ dành cho giai cấp công nhân"],
        correctAnswer: 2,
        explanation: "Lênin khẳng định dân chủ XHCN là nền dân chủ cho đại đa số cư dân, những người lao động bị bóc lột."
    },
    {
        question: "Dân chủ xã hội chủ nghĩa được thực hiện thông qua công cụ nào là chủ yếu?",
        options: ["Các tổ chức tôn giáo", "Nhà nước pháp quyền xã hội chủ nghĩa", "Các doanh nghiệp tư nhân", "Các lực lượng quân đội nước ngoài"],
        correctAnswer: 1,
        explanation: "Nhà nước là công cụ thực thi quyền làm chủ của nhân dân dưới sự lãnh đạo của Đảng."
    },
    {
        question: "Nhà nước XHCN ra đời từ nguyện vọng nào của nhân dân lao động?",
        options: ["Thoát khỏi áp bức, bất công và chuyên chế", "Muốn xâm lược các quốc gia khác", "Duy trì chế độ chiếm hữu nô lệ", "Phát triển kinh tế tư bản chủ nghĩa"],
        correctAnswer: 0,
        explanation: "Xuất phát từ nhu cầu giải phóng con người."
    },
    {
        question: "Tại sao Nhà nước XHCN được gọi là \"nửa nhà nước\"?",
        options: ["Vì nó chỉ hoạt động ở một số vùng", "Vì nó không có hiến pháp", "Vì nó chủ yếu thực hiện chức năng tổ chức quản lý hơn là trấn áp", "Vì nó chỉ dành cho người nghèo"],
        correctAnswer: 2,
        explanation: "Nó không còn là nhà nước theo đúng nghĩa của các giai cấp bóc lột."
    },
    {
        question: "Chức năng nào của Nhà nước XHCN là quan trọng nhất?",
        options: ["Trấn áp sự phản kháng", "Tổ chức và xây dựng xã hội mới", "Quan hệ ngoại giao", "Thu thuế của nhân dân"],
        correctAnswer: 1,
        explanation: "Đây là nội dung then chốt, quyết định thắng lợi cuối cùng của CNXH."
    },
    {
        question: "Mối quan hệ giữa dân chủ XHCN và nhà nước XHCN là gì?",
        options: ["Dân chủ là cơ sở xây dựng nhà nước; nhà nước là công cụ thực thi dân chủ", "Nhà nước đứng trên dân chủ", "Dân chủ và nhà nước mâu thuẫn lẫn nhau", "Nhà nước quyết định dân chủ một cách tùy tiện"],
        correctAnswer: 0,
        explanation: "Nhà nước thể chế hóa ý chí nhân dân thành pháp luật."
    },
    {
        question: "Chế độ dân chủ nhân dân ở nước ta được xác lập sau sự kiện nào?",
        options: ["Cách mạng Tháng Tám năm 1945", "Chiến thắng Điện Biên Phủ 1954", "Thống nhất đất nước 1975", "Đại hội VI năm 1986"],
        correctAnswer: 0,
        explanation: "Sau cách mạng tháng Tám, Nhà nước dân chủ nhân dân đầu tiên tại Đông Nam Á ra đời."
    },
    {
        question: "Tên nước Cộng hòa xã hội chủ nghĩa Việt Nam chính thức có từ năm:",
        options: ["1945", "1954", "1976", "1986"],
        correctAnswer: 2,
        explanation: "Sau khi thống nhất đất nước về mặt nhà nước."
    },
    {
        question: "Đại hội nào của Đảng nhấn mạnh phát huy dân chủ để tạo động lực mạnh mẽ cho phát triển?",
        options: ["Đại hội IV", "Đại hội V", "Đại hội VI", "Đại hội VII"],
        correctAnswer: 2,
        explanation: "Đại hội VI (1986) đề ra đường lối đổi mới toàn diện, nhấn mạnh \"lấy dân làm gốc\"."
    },
    {
        question: "Bản chất dân chủ XHCN ở Việt Nam dựa trên sự ủng hộ của:",
        options: ["Các cường quốc thế giới", "Nhà nước XHCN và sự ủng hộ của nhân dân", "Các tập đoàn đa quốc gia", "Các tổ chức phi chính phủ nước ngoài"],
        correctAnswer: 1,
        explanation: "Quyền làm chủ của nhân dân là tất cả quyền lực đều thuộc về nhân dân."
    },
    {
        question: "Hình thức dân chủ trực tiếp ở Việt Nam được thực hiện như thế nào?",
        options: ["Bầu đại biểu Quốc hội", "Nhân dân bàn bạc và quyết định trực tiếp các công việc ở cơ sở", "Ủy quyền cho cán bộ cấp xã tự quyết", "Thông qua việc Đảng ban hành nghị quyết"],
        correctAnswer: 1,
        explanation: "Thể hiện qua việc người dân trực tiếp tham gia quản lý nhà nước và xã hội."
    },
    {
        question: "Hình thức dân chủ gián tiếp còn được gọi là gì?",
        options: ["Dân chủ tập trung", "Dân chủ đại diện", "Dân chủ cơ sở", "Dân chủ tuyệt đối"],
        correctAnswer: 1,
        explanation: "Nhân dân \"ủy quyền\" cho các cơ quan đại diện do mình bầu ra."
    },
    {
        question: "Quốc hội Việt Nam hoạt động theo nhiệm kỳ mấy năm?",
        options: ["3 năm", "4 năm", "5 năm", "6 năm"],
        correctAnswer: 2,
        explanation: "Theo quy định của Hiến pháp."
    },
    {
        question: "Phương châm thực hiện dân chủ tại cơ sở ở Việt Nam là:",
        options: ["Dân biết, dân làm, dân hưởng", "Đảng lãnh đạo, dân thực hiện", "Dân biết, dân bàn, dân làm, dân kiểm tra", "Nhà nước quản lý, dân phục tùng"],
        correctAnswer: 2,
        explanation: "Đây là quy chế dân chủ cơ sở được Đảng ta khẳng định."
    },
    {
        question: "Trở ngại lớn nhất đối với việc thực hiện dân chủ ở Việt Nam hiện nay là:",
        options: ["Do người dân không quan tâm", "Âm mưu \"diễn biến hòa bình\" của các thế lực thù địch", "Do kinh tế quá phát triển", "Do thiếu hụt nhân lực lao động"],
        correctAnswer: 1,
        explanation: "Các thế lực thù địch lợi dụng chiêu bài \"dân chủ\", \"nhân quyền\" để chống phá."
    },
    {
        question: "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam mang bản chất của:",
        options: ["Giai cấp tư sản", "Giai cấp công nhân", "Tầng lớp trí thức", "Các doanh nhân"],
        correctAnswer: 1,
        explanation: "Gắn bó chặt chẽ với dân tộc và nhân dân."
    },
    {
        question: "Đặc điểm thứ nhất của Nhà nước pháp quyền XHCN Việt Nam là:",
        options: ["Xây dựng nhà nước do nhân dân lao động làm chủ", "Thực hiện đa đảng đối lập", "Quyền lực nhà nước chia cắt hoàn toàn", "Không cần sự lãnh đạo của Đảng"],
        correctAnswer: 0,
        explanation: "Nhà nước của dân, do dân, vì dân."
    },
    {
        question: "Đặc điểm về tổ chức quyền lực trong Nhà nước pháp quyền XHCN Việt Nam là:",
        options: ["Tam quyền phân lập", "Thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan", "Quyền lực tập trung vào Chính phủ", "Quyền lực tập trung vào Tòa án"],
        correctAnswer: 1,
        explanation: "Đảm bảo tính thống nhất nhưng vẫn có sự giám sát lẫn nhau."
    },
    {
        question: "Nhà nước pháp quyền XHCN Việt Nam đặt yếu tố nào lên vị trí tối thượng?",
        options: ["Ý chí của cán bộ", "Hiến pháp và pháp luật", "Các quy định của địa phương", "Các thỏa thuận kinh tế"],
        correctAnswer: 1,
        explanation: "Mọi hoạt động của xã hội đều phải điều chỉnh bằng pháp luật."
    },
    {
        question: "Vai trò của Đảng Cộng sản Việt Nam đối với Nhà nước pháp quyền là:",
        options: ["Đứng ngoài pháp luật", "Lãnh đạo Nhà nước theo Điều 4 Hiến pháp", "Chỉ tham gia tư vấn", "Thay thế hoàn toàn bộ máy nhà nước"],
        correctAnswer: 1,
        explanation: "Đảng định hướng và lãnh đạo thông qua cương lĩnh và chính sách."
    },
    {
        question: "Trong Nhà nước pháp quyền XHCN Việt Nam, con người được coi là:",
        options: ["Công cụ sản xuất", "Đối tượng để trấn áp", "Trung tâm của sự phát triển", "Nguồn thu thuế chủ yếu"],
        correctAnswer: 2,
        explanation: "Tôn trọng và bảo vệ quyền con người là ưu tiên hàng đầu."
    },
    {
        question: "Tổ chức và hoạt động của bộ máy nhà nước Việt Nam theo nguyên tắc nào?",
        options: ["Tự do cá nhân", "Tập trung dân chủ", "Phân tán quyền lực", "Chỉ huy quân sự"],
        correctAnswer: 1,
        explanation: "Đảm bảo sự chỉ đạo thống nhất của Trung ương đồng thời phát huy tính chủ động địa phương."
    },
    {
        question: "Giải pháp đầu tiên để phát huy dân chủ XHCN ở Việt Nam hiện nay là:",
        options: ["Hoàn thiện thể chế kinh tế thị trường định hướng XHCN", "Tăng cường mua sắm vũ khí", "Xóa bỏ các tổ chức quần chúng", "Hạnh chế quyền thông tin của dân"],
        correctAnswer: 0,
        explanation: "Tạo cơ sở kinh tế vững chắc cho dân chủ."
    },
    {
        question: "Để đảm bảo vai trò lãnh đạo, Đảng phải thường xuyên thực hiện nhiệm vụ gì?",
        options: ["Tăng số lượng đảng viên", "Tự đổi mới, tự chỉnh đốn, nâng cao trình độ trí tuệ", "Tập trung vào kinh doanh", "Can thiệp trực tiếp vào việc xét xử của tòa án"],
        correctAnswer: 1,
        explanation: "Xây dựng Đảng trong sạch, vững mạnh là điều kiện tiên quyết."
    },
    {
        question: "Cơ quan nào ở Việt Nam có quyền lập hiến và lập pháp?",
        options: ["Chính phủ", "Quốc hội", "Tòa án nhân dân tối cao", "Mặt trận Tổ quốc"],
        correctAnswer: 1,
        explanation: "Quốc hội là cơ quan đại biểu cao nhất của nhân dân."
    },
    {
        question: "Một trong những nhiệm vụ trọng tâm để hoàn thiện bộ máy hành chính là:",
        options: ["Tăng thêm các thủ tục giấy tờ", "Cải cách hành chính, giảm mạnh và bãi bỏ các thủ tục phiền hà", "Mở rộng biên chế nhà nước", "Tập trung quyền lực vào một cá nhân"],
        correctAnswer: 1,
        explanation: "Nhằm phục vụ nhân dân tốt hơn."
    },
    {
        question: "Đội ngũ cán bộ, công chức trong sạch, có năng lực cần được:",
        options: ["Tuyển dụng dựa trên quan hệ", "Nâng cao chất lượng về bản lĩnh chính trị và đạo đức", "Miễn trừ mọi trách nhiệm pháp lý", "Trả lương không theo năng suất lao động"],
        correctAnswer: 1,
        explanation: "Xây dựng đội ngũ là yếu tố then chốt của bộ máy."
    },
    {
        question: "Nhiệm vụ cấp bách, lâu dài của quá trình xây dựng Nhà nước pháp quyền hiện nay là:",
        options: ["Tăng trưởng kinh tế bất chấp môi trường", "Đấu tranh phòng, chống tham nhũng, lãng phí", "Hạn chế quan hệ ngoại giao", "Giảm vai trò giám sát của dân"],
        correctAnswer: 1,
        explanation: "Bảo vệ sự trong sạch của bộ máy và niềm tin của dân."
    },
    {
        question: "Vai trò của Mặt trận Tổ quốc và các đoàn thể nhân dân là gì?",
        options: ["Làm thay công việc của Chính phủ", "Giám sát và phản biện xã hội", "Chỉ tập trung vào các phong trào văn nghệ", "Thu thuế của các hội viên"],
        correctAnswer: 1,
        explanation: "Phát huy sức mạnh khối đại đoàn kết toàn dân."
    },
    {
        question: "Tại sao cần nâng cao dân trí, văn hóa pháp luật cho nhân dân?",
        options: ["Để người dân đi làm nhiều hơn", "Để người dân biết sử dụng các quyền làm chủ của mình", "Để tăng số lượng người đi học", "Để nhà nước dễ quản lý hơn"],
        correctAnswer: 1,
        explanation: "Dân chủ chỉ thực sự hiệu quả khi dân có kiến thức và ý thức pháp luật."
    },
    {
        question: "Nhà nước XHCN mang tính nhân dân rộng rãi vì:",
        options: ["Nó chăm lo lợi ích cho đại đa số nhân dân lao động", "Nó không có biên giới", "Nó dành cho mọi người trên thế giới", "Nó không sử dụng pháp luật"],
        correctAnswer: 0,
        explanation: "Mục tiêu hàng đầu là vì lợi ích nhân dân."
    },
    {
        question: "Chức năng trấn áp của Nhà nước XHCN đối với các thế lực thù địch nhằm:",
        options: ["Gây chiến tranh", "Bảo vệ thành quả cách mạng và an ninh chính trị", "Làm hại nhân dân", "Thu lợi nhuận kinh tế"],
        correctAnswer: 1,
        explanation: "Là sự trấn áp của đa số đối với thiểu số bóc lột chống phá."
    },
    {
        question: "Tính ưu việt của dân chủ XHCN so với dân chủ tư sản thể hiện ở:",
        options: ["Sự đa dạng các mặt hàng tiêu dùng", "Quyền làm chủ đi đôi với công bằng xã hội thực tế", "Việc không cần phải đóng thuế", "Sự tự do không cần luật pháp"],
        correctAnswer: 1,
        explanation: "Gắn liền với công bằng và giải phóng con người."
    },
    {
        question: "Trong nền dân chủ XHCN, dân chủ gắn liền với:",
        options: ["Sự lỏng lẻo trong quản lý", "Kỷ luật, kỷ cương", "Sự tùy tiện cá nhân", "Sự biến mất của pháp luật"],
        correctAnswer: 1,
        explanation: "Dân chủ không phải là vô chính phủ."
    },
    {
        question: "Theo Hồ Chí Minh, cán bộ là gì của nhân dân?",
        options: ["Là cha mẹ dân", "Là đầy tớ trung thành của nhân dân", "Là chủ của nhân dân", "Là người đứng ngoài cuộc sống của dân"],
        correctAnswer: 1,
        explanation: "Người khẳng định Chính phủ là đầy tớ cho nhân dân."
    },
    {
        question: "Dân chủ trong kinh tế ở Việt Nam thể hiện qua:",
        options: ["Phát triển đa dạng các hình thức sở hữu và thành phần kinh tế", "Nhà nước nắm giữ tất cả mọi tài sản cá nhân", "Chỉ cho phép kinh tế quốc doanh hoạt động", "Không cho phép doanh nghiệp nước ngoài đầu tư"],
        correctAnswer: 0,
        explanation: "Tạo môi trường cạnh tranh lành mạnh."
    },
    {
        question: "Việc công khai, minh bạch các chính sách giúp nhân dân:",
        options: ["Đóng thuế nhiều hơn", "Giám sát và đánh giá chính xác các chủ trương của Đảng, Nhà nước", "Không cần quan tâm đến chính trị", "Tự do làm mọi việc không cần xin phép"],
        correctAnswer: 1,
        explanation: "Là điều kiện để thực hiện \"Dân biết\"."
    },
    {
        question: "Cơ chế \"kiểm soát giữa các quyền\" trong Nhà nước pháp quyền nhằm:",
        options: ["Gây khó khăn cho các cơ quan", "Ngăn ngừa sự lạm quyền, vi phạm quyền làm chủ của dân", "Tăng thêm số lượng cán bộ", "Giảm tốc độ ra quyết định"],
        correctAnswer: 1,
        explanation: "Đảm bảo mỗi nhánh quyền lực hoạt động đúng chức năng."
    },
    {
        question: "Thành phần nào lãnh đạo quá trình xây dựng dân chủ XHCN?",
        options: ["Giai cấp nông dân", "Tầng lớp tiểu tư sản", "Giai cấp công nhân", "Các tổ chức tôn giáo"],
        correctAnswer: 2,
        explanation: "Thông qua Đảng Cộng sản."
    },
    {
        question: "Dân chủ trực tiếp và dân chủ gián tiếp có mối quan hệ:",
        options: ["Bài trừ lẫn nhau", "Bổ sung cho nhau để thực hiện quyền làm chủ của dân", "Chỉ nên thực hiện một hình thức", "Hình thức trực tiếp quan trọng hơn nhiều"],
        correctAnswer: 1,
        explanation: "Cả hai đều cần thiết trong hệ thống dân chủ."
    },
    {
        question: "Sự tiêu vong của dân chủ XHCN theo Mác - Lênin là:",
        options: ["Một quá trình nhanh chóng sau cách mạng", "Một quá trình lâu dài khi xã hội không còn giai cấp", "Do nhân dân không muốn dùng dân chủ nữa", "Do sự can thiệp của nước ngoài"],
        correctAnswer: 1,
        explanation: "Gắn liền với sự tiêu vong của nhà nước."
    },
    {
        question: "Sự khác biệt về chất của Nhà nước XHCN với các nhà nước trước đó là:",
        options: ["Nó có quân đội mạnh nhất", "Nó là công cụ để thực hiện quyền làm chủ của đại đa số nhân dân", "Nó có nhiều tài nguyên hơn", "Nó không sử dụng tiền tệ"],
        correctAnswer: 1,
        explanation: "Bản chất nhân dân sâu sắc."
    },
    {
        question: "Giải pháp nâng cao vai trò của Mặt trận Tổ quốc gồm:",
        options: ["Đổi mới phương thức hoạt động để giám sát, phản biện hiệu quả", "Tăng thêm các chức vụ lãnh đạo", "Giảm bớt các cuộc họp với dân", "Chỉ thực hiện lệnh của cấp trên"],
        correctAnswer: 0,
        explanation: "Để thực sự là tiếng nói của nhân dân."
    },
    {
        question: "Nhà nước pháp quyền XHCN Việt Nam là công cụ để:",
        options: ["Đảng tự phục vụ lợi ích riêng", "Đảng định hướng đi lên chủ nghĩa xã hội", "Giai cấp tư sản làm giàu", "Xóa bỏ hoàn toàn văn hóa dân tộc"],
        correctAnswer: 1,
        explanation: "Nhà nước là công cụ chủ yếu dưới sự định hướng của Đảng."
    },
    {
        question: "Mục tiêu tổng quát của việc phát huy dân chủ ở Việt Nam là:",
        options: ["Dân giàu, nước mạnh, dân chủ, công bằng, văn minh", "Trở thành cường quốc quân sự hàng đầu", "Xây dựng xã hội chỉ có người giàu", "Mở rộng lãnh thổ ra bên ngoài"],
        correctAnswer: 0,
        explanation: "Đây là mục tiêu xuyên suốt được Đảng khẳng định."
    }
];
