import { mylog } from "./lib/env/env.js";
import {gospels} from './lib/gospels.js';


export const alandSynopsis = {
pericopes: [
{pericope: 1 , title: "Prologue" , Matt: { ref: "1:1" , primary: true }, Mark: { ref: "1:1" , primary: true }, Luke: { ref: "1:1-4" , primary: true }, John: { ref: "1:1-18" , primary: true }, other: { ref: "Acts 1:1-2" }},
{pericope: 2 , title: "The Promise of the Birth of John the Baptist" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "1:5-25" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 3 , title: "The Annunciation" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "1:26-38" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 4 , title: "Mary's Visit to Elizabeth" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "1:39-56" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 5 , title: "The Birth of John the Baptist" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "1:57-80" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 6 , title: "The Genealogy of Jesus" , Matt: { ref: "1:2-17" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "3:23-38" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 7 , title: "The Birth of Jesus" , Matt: { ref: "1:18-25" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "2:1-7" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 8 , title: "The Adoration of the Infant Jesus" , Matt: { ref: "2:1-12" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "2:8-20" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 9 , title: "The Circumcision and Presentation in the Temple" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "2:21-38" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 10 , title: "The Flight into Egypt and Return" , Matt: { ref: "2:13-21" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 11 , title: "The Childhood of Jesus at Nazareth" , Matt: { ref: "2:22-23" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "2:39-40" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 12 , title: "The Boy Jesus in the Temple" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "2:41-52" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 13 , title: "John the Baptist" , Matt: { ref: "3:1-6" , primary: true }, Mark: { ref: "1:2-6" , primary: true }, Luke: { ref: "3:1-6" , primary: true }, John: { ref: "1:19-23" , primary: true }, other: { ref: null }},
{pericope: 14 , title: "John's Preaching of Repentance" , Matt: { ref: "3:7-10" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "3:7-9" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 15 , title: "John Replies to Questioners" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "3:10-14" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 16 , title: "John's Messianic Preaching" , Matt: { ref: "3:11-12" , primary: true }, Mark: { ref: "1:7-8" , primary: true }, Luke: { ref: "3:15-18" , primary: true }, John: { ref: "1:24-28" , primary: true }, other: { ref: "Acts 13:24-25" }},
{pericope: 17 , title: "The Imprisonment of John" , Matt: { ref: "14:3-4" , primary: false }, Mark: { ref: "6:17-18" , primary: false }, Luke: { ref: "3:19-20" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 18 , title: "The Baptism of Jesus" , Matt: { ref: "3:13-17" , primary: true }, Mark: { ref: "1:9-11" , primary: true }, Luke: { ref: "3:21-22" , primary: true }, John: { ref: "1:29-34" , primary: true }, other: { ref: null }},
{pericope: 19 , title: "The Genealogy of Jesus" , Matt: { ref: "1:1-17" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "3:23-38" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 20 , title: "The Temptation" , Matt: { ref: "4:1-11" , primary: true }, Mark: { ref: "1:12-13" , primary: true }, Luke: { ref: "4:1-13" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 21 , title: "The Call of the First Disciples" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "1:35-51" , primary: true }, other: { ref: null }},
{pericope: 22 , title: "The Marriage at Cana" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "2:1-11" , primary: true }, other: { ref: null }},
{pericope: 23 , title: "The Sojourn at Capernaum" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "2:12" , primary: true }, other: { ref: null }},
{pericope: 24 , title: "The First Journey to Jerusalem" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "2:13" , primary: true }, other: { ref: null }},
{pericope: 25 , title: "The Cleansing of the Temple" , Matt: { ref: "21:12-13" , primary: false }, Mark: { ref: "11:15-17" , primary: false }, Luke: { ref: "19:45-46" , primary: false }, John: { ref: "2:14-22" , primary: true }, other: { ref: null }},
{pericope: 26 , title: "Jesus' Ministry in Jerusalem" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "2:23-25" , primary: true }, other: { ref: null }},
{pericope: 27 , title: "The Discourse with Nicodemus" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "3:1-21" , primary: true }, other: { ref: null }},
{pericope: 28 , title: "Jesus' Ministry in Judea" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "3:22" , primary: true }, other: { ref: null }},
{pericope: 29 , title: "John's Testimony to Christ" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "3:23-36" , primary: true }, other: { ref: null }},
{pericope: 30 , title: "The Journey into Galilee" , Matt: { ref: "4:12" , primary: true }, Mark: { ref: "1:14a" , primary: true }, Luke: { ref: "4:14a" , primary: true }, John: { ref: "4:1-3" , primary: true }, other: { ref: null }},
{pericope: 31 , title: "The Discourse with the Woman of Samaria" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "4:4-42" , primary: true }, other: { ref: null }},
{pericope: 32 , title: "Ministry in Galilee" , Matt: { ref: "4:13-17" , primary: true }, Mark: { ref: "1:14b-15" , primary: true }, Luke: { ref: "4:14b-15" , primary: true }, John: { ref: "4:43-46a" , primary: true }, other: { ref: null }},
{pericope: 33 , title: "Jesus' Preaching at Nazareth" , Matt: { ref: "13:53-58" , primary: false }, Mark: { ref: "6:1-6a" , primary: false }, Luke: { ref: "4:16-30" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 34 , title: "The Call of the Disciples" , Matt: { ref: "4:18-22" , primary: true }, Mark: { ref: "1:16-20" , primary: true }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 35 , title: "Teaching in the Synagogue at Capernaum" , Matt: { ref: null , primary: false }, Mark: { ref: "1:21-22" , primary: true }, Luke: { ref: "4:31-32" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 36 , title: "The Healing of the Demoniac in the Synagogue" , Matt: { ref: null , primary: false }, Mark: { ref: "1:23-28" , primary: true }, Luke: { ref: "4:33-37" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 37 , title: "The Healing of Peter's Mother-in-law" , Matt: { ref: "8:14-15" , primary: false }, Mark: { ref: "1:29-31" , primary: true }, Luke: { ref: "4:38-39" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 38 , title: "The Sick Healed at Evening" , Matt: { ref: "8:16-17" , primary: false }, Mark: { ref: "1:32-34" , primary: true }, Luke: { ref: "4:40-41" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 39 , title: "Jesus Departs from Capernaurn" , Matt: { ref: null , primary: false }, Mark: { ref: "1:35-38" , primary: true }, Luke: { ref: "4:42-43" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 40 , title: "First Preaching Tour in Galilee" , Matt: { ref: "4:23" , primary: true }, Mark: { ref: "1:39" , primary: true }, Luke: { ref: "4:44" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 41 , title: "The Miraculous Draught of Fish" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "5:1-11" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 42 , title: "The Cleansing of the Leper" , Matt: { ref: "8:1-4" , primary: false }, Mark: { ref: "1:40-45" , primary: true }, Luke: { ref: "5:12-16" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 43 , title: "The Healing of the Paralytic" , Matt: { ref: "9:1-8" , primary: false }, Mark: { ref: "2:1-12" , primary: true }, Luke: { ref: "5:17-26" , primary: true }, John: { ref: "5:8-9a" , primary: false }, other: { ref: null }},
{pericope: 44 , title: "The Call of Levi (Matthew)" , Matt: { ref: "9:9-13" , primary: false }, Mark: { ref: "2:13-17" , primary: true }, Luke: { ref: "5:27-32" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 45 , title: "The Question about Fasting" , Matt: { ref: "9:14-17" , primary: false }, Mark: { ref: "2:18-22" , primary: true }, Luke: { ref: "5:33-39" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 46 , title: "Plucking Grain on the Sabbath" , Matt: { ref: "12:1-8" , primary: false }, Mark: { ref: "2:23-28" , primary: true }, Luke: { ref: "6:1-5" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 47 , title: "The Man with the Withered Hand" , Matt: { ref: "12:9-14" , primary: false }, Mark: { ref: "3:1-6" , primary: true }, Luke: { ref: "6:6-11" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 48 , title: "Jesus Heals Multitudes by the Sea" , Matt: { ref: "4:24-25; 12:15-16" , primary: false }, Mark: { ref: "3:7-12" , primary: true }, Luke: { ref: "6:17-19" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 49 , title: "The Choosing of the Twelve" , Matt: { ref: "10:1-4" , primary: false }, Mark: { ref: "3:13-19" , primary: true }, Luke: { ref: "6:12-16" , primary: true }, John: { ref: null , primary: false }, other: { ref: "Acts 1:13b" }},
{pericope: 50 , title: "Occasion of the Sermon" , Matt: { ref: "4:24-25; 5:1-2" , primary: true }, Mark: { ref: "3:7-13 a" , primary: false }, Luke: { ref: "6:17-20a" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 51 , title: "The Beatitudes" , Matt: { ref: "5:3-12" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "6:20b-23" , primary: false }, John: { ref: null , primary: false }, other: { ref: "1 Pet 3:14; 1 Pet 4:14" }},
{pericope: 52 , title: "The Salt of the Earth" , Matt: { ref: "5:13" , primary: true }, Mark: { ref: "9:49-50" , primary: false }, Luke: { ref: "14:34-35" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 53 , title: "The Light of the World" , Matt: { ref: "5:14-16" , primary: true }, Mark: { ref: "4:21" , primary: false }, Luke: { ref: "8:16" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 54 , title: "On the Law and the Prophets" , Matt: { ref: "5:17-20" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "16:16-17" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 55 , title: "On Murder and Wrath" , Matt: { ref: "5:21-26" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "12:57-59" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 56 , title: "On Adultery and Divorce" , Matt: { ref: "5:27-32" , primary: true }, Mark: { ref: "9:43-48" , primary: false }, Luke: { ref: "16:18" , primary: false }, John: { ref: null , primary: false }, other: { ref: "1 Cor 7:10-16" }},
{pericope: 57 , title: "On Oaths" , Matt: { ref: "5:33-37" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: "Jas 5:12" }},
{pericope: 58 , title: "On Retaliation" , Matt: { ref: "5:38-42" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "6:29-30" , primary: false }, John: { ref: null , primary: false }, other: { ref: "Acts 20:35" }},
{pericope: 59 , title: "On Love of One's Enemies" , Matt: { ref: "5:43-48" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "6:27-28; 6:32-36" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 60 , title: "On Almsgiving" , Matt: { ref: "6:1-4" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 61 , title: "On Prayer" , Matt: { ref: "6:5-6" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 62 , title: "The Lord's Prayer" , Matt: { ref: "6:7-15" , primary: true }, Mark: { ref: "11:25" , primary: false }, Luke: { ref: "11:1-4" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 63 , title: "On Fasting" , Matt: { ref: "6:16-18" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 64 , title: "On Treasures" , Matt: { ref: "6:19-21" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "12:33-34" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 65 , title: "The Sound Eye" , Matt: { ref: "6:22-23" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "11:34-36" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 66 , title: "On Serving Two Masters" , Matt: { ref: "6:24" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "16:13" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 67 , title: "On Anxiety" , Matt: { ref: "6:25-34" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "12:22-32" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 68 , title: "On Judging" , Matt: { ref: "7:1-5" , primary: true }, Mark: { ref: "4:24-25" , primary: false }, Luke: { ref: "6:37-42" , primary: false }, John: { ref: null , primary: false }, other: { ref: "Romans 2:1-3" }},
{pericope: 69 , title: "On Profaning the Holy" , Matt: { ref: "7:6" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 70 , title: "God's Answering of Prayer" , Matt: { ref: "7:7-11" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "11:9-13" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 71 , title: "The Golden Rule" , Matt: { ref: "7:12" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "6:31" , primary: false }, John: { ref: null , primary: false }, other: { ref: "Acts 15:19-20,28-29; Acts 21:25" }},
{pericope: 72 , title: "The Two Ways" , Matt: { ref: "7:13-14" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "13:23-24" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 73 , title: "'By their Fruits'" , Matt: { ref: "7:15-20; 12:33-35" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "6:43-45" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 74 , title: "'Saying Lord, Lord'" , Matt: { ref: "7:21-23" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "6:46; 13:25-27" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 75 , title: "The House Built upon the Rock" , Matt: { ref: "7:24-27" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "6:47-49" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 76 , title: "The Effect of the Sermon" , Matt: { ref: "7:28-29" , primary: true }, Mark: { ref: "1:21-22" , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 77 , title: "Occasion of the Sermon" , Matt: { ref: "4:24-25; 5:1-2" , primary: false }, Mark: { ref: "3:7-13a" , primary: false }, Luke: { ref: "6:17-20a" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 78 , title: "The Beatitudes" , Matt: { ref: "5:3-12" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "6:20b-23" , primary: true }, John: { ref: null , primary: false }, other: { ref: "1 Pet 4:14" }},
{pericope: 79 , title: "The Woes" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "6:24-26" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 80 , title: "On Love of One's Enemies" , Matt: { ref: "5:38-48" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "6:27-36" , primary: true }, John: { ref: null , primary: false }, other: { ref: "Acts 20:35" }},
{pericope: 81 , title: "On Judging" , Matt: { ref: "7:1-5" , primary: false }, Mark: { ref: "4:24-25" , primary: false }, Luke: { ref: "6:37-42" , primary: true }, John: { ref: null , primary: false }, other: { ref: "Romans 2:1-3" }},
{pericope: 82 , title: "'By their Fruits'" , Matt: { ref: "7:15-20; 12:33-35" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "6:43-45" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 83 , title: "The House Built upon the Rock" , Matt: { ref: "7:21-27" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "6:46-49" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 84 , title: "Cleansing of the Leper" , Matt: { ref: "8:1-4" , primary: true }, Mark: { ref: "1:40-45" , primary: false }, Luke: { ref: "5:12-16" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 85 , title: "The Centurion of Capernaum" , Matt: { ref: "8:5-13" , primary: true }, Mark: { ref: "7:3" , primary: false }, Luke: { ref: "7:1-10; 13:28-29" , primary: true }, John: { ref: "4:46b-54" , primary: true }, other: { ref: null }},
{pericope: 86 , title: "The Widow's Son at Nain" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "7:11-17" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 87 , title: "The Healing of Peter's Mother-in-law" , Matt: { ref: "8:14-15" , primary: true }, Mark: { ref: "1:29-31" , primary: false }, Luke: { ref: "4:38-39" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 88 , title: "The Sick Healed at Evening" , Matt: { ref: "8:16-17" , primary: true }, Mark: { ref: "1:32-34" , primary: false }, Luke: { ref: "4:40-41" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 89 , title: "On Following Jesus" , Matt: { ref: "8:18-22" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "9:57-62" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 90 , title: "Stilling the Storm" , Matt: { ref: "8:23-27" , primary: true }, Mark: { ref: "4:35-41" , primary: false }, Luke: { ref: "8:22-25" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 91 , title: "The Gadarene Demoniacs" , Matt: { ref: "8:28-34" , primary: true }, Mark: { ref: "5:1-20" , primary: false }, Luke: { ref: "8:26-39" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 92 , title: "The Healing of the Paralytic" , Matt: { ref: "9:1-8" , primary: true }, Mark: { ref: "2:1-12" , primary: false }, Luke: { ref: "5:17-26" , primary: false }, John: { ref: "5:8-9a" , primary: false }, other: { ref: null }},
{pericope: 93 , title: "The Call of Levi (Matthew)" , Matt: { ref: "9:9-13" , primary: true }, Mark: { ref: "2:13-17" , primary: false }, Luke: { ref: "5:27-32" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 94 , title: "The Question about Fasting" , Matt: { ref: "9:14-17" , primary: true }, Mark: { ref: "2:18-22" , primary: false }, Luke: { ref: "5:33-39" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 95 , title: "Jairus' Daughter and the Woman with a Hemorrhage" , Matt: { ref: "9:18-26" , primary: true }, Mark: { ref: "5:21-43" , primary: false }, Luke: { ref: "8:40-56" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 96 , title: "Two Blind Men" , Matt: { ref: "9:27-31; 20:29-34" , primary: true }, Mark: { ref: "10:46-52" , primary: false }, Luke: { ref: "18:35-43" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 97 , title: "The Dumb Demoniac" , Matt: { ref: "9:32-34; 12:22-24" , primary: true }, Mark: { ref: "3:22" , primary: false }, Luke: { ref: "11:14-15" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 98 , title: "The Harvest is Great" , Matt: { ref: "9:35-38" , primary: true }, Mark: { ref: "6:6b; 6:34" , primary: false }, Luke: { ref: "8:1; 10:2" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 99 , title: "Commissioning the Twelve" , Matt: { ref: "10:1-16" , primary: true }, Mark: { ref: "6:7; 3:13-19; 6:8-11" , primary: false }, Luke: { ref: "9:1; 6:12-16; 9:2-5; 10:3" , primary: false }, John: { ref: null , primary: false }, other: { ref: "Acts 1:13b; 1 Cor 9:5-14; 1 Tim 5:18; Jas 5:4" }},
{pericope: 100 , title: "The Fate of the Disciples" , Matt: { ref: "10:17-25; 24:9-14" , primary: true }, Mark: { ref: "13:9-13" , primary: false }, Luke: { ref: "12:11-12; 6:40; 21:12-19" , primary: false }, John: { ref: "13:16" , primary: false }, other: { ref: "2 Tim 2:12" }},
{pericope: 101 , title: "Exhortation to Fearless Confession" , Matt: { ref: "10:26-33" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "12:2-9" , primary: false }, John: { ref: null , primary: false }, other: { ref: "Acts 27:34; 2 Tim 2:12; Rev 3:5" }},
{pericope: 102 , title: "Divisions within Households" , Matt: { ref: "10:34-36" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "12:51-53" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 103 , title: "Conditions of Discipleship" , Matt: { ref: "10:37-39" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "14:25-27; 17:33" , primary: false }, John: { ref: "12:25" , primary: false }, other: { ref: null }},
{pericope: 104 , title: "Rewards of Discipleship" , Matt: { ref: "10:40-42" , primary: true }, Mark: { ref: "9:41" , primary: false }, Luke: { ref: "10:16" , primary: false }, John: { ref: "13:20" , primary: false }, other: { ref: null }},
{pericope: 105 , title: "Continuation of Journey" , Matt: { ref: "11:1" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 106 , title: "John the Baptist's Question and Jesus' Answer" , Matt: { ref: "11:2-6" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "7:18-23" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 107 , title: "Jesus' Witness concerning John" , Matt: { ref: "11:7-19" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "7:24-35; 16:16" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 108 , title: "Woes Pronounced on Galilean Cities" , Matt: { ref: "11:20-24" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "10:12-15" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 109 , title: "Jesus' Thanksgiving to the Father" , Matt: { ref: "11:25-27" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "10:21-22" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 110 , title: "'Come unto Me'" , Matt: { ref: "11:28-30" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 111 , title: "Plucking Grain on the Sabbath" , Matt: { ref: "12:1-8" , primary: true }, Mark: { ref: "2:23-28" , primary: false }, Luke: { ref: "6:1-5" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 112 , title: "Healing the Withered Hand" , Matt: { ref: "12:9-14" , primary: true }, Mark: { ref: "3:1-6" , primary: false }, Luke: { ref: "6:6-11" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 113 , title: "Jesus Heals Multitudes by the Sea" , Matt: { ref: "12:15-21" , primary: true }, Mark: { ref: "3:7-12" , primary: false }, Luke: { ref: "6:17-19" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 114 , title: "The Woman with the Ointment" , Matt: { ref: "26:6-13" , primary: false }, Mark: { ref: "14:3-9" , primary: false }, Luke: { ref: "7:36-50" , primary: true }, John: { ref: "12:1-8" , primary: false }, other: { ref: null }},
{pericope: 115 , title: "The Ministering Women" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "8:1-3" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 116 , title: "Jesus is Thought to be Beside Himself" , Matt: { ref: null , primary: false }, Mark: { ref: "3:20-21" , primary: true }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 117 , title: "On Collusion with Satan" , Matt: { ref: "12:22-30; 9:32-34" , primary: true }, Mark: { ref: "3:22-27" , primary: true }, Luke: { ref: "11:14-15; 11:17-23" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 118 , title: "The Sin against the Holy Spirit" , Matt: { ref: "12:31-37; 7:16-20" , primary: true }, Mark: { ref: "3:28-30" , primary: true }, Luke: { ref: "12:10; 6:43-45" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 119 , title: "The Sign of Jonah" , Matt: { ref: "12:38-42; 16:1-2a,4" , primary: true }, Mark: { ref: "8:11-12" , primary: false }, Luke: { ref: "11:16; 11:29-32" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 120 , title: "The Return of the Evil Spirit" , Matt: { ref: "12:43-45" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "11:24-26" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 121 , title: "Jesus' True Kindred" , Matt: { ref: "12:46-50" , primary: true }, Mark: { ref: "3:31-35" , primary: true }, Luke: { ref: "8:19-21" , primary: false }, John: { ref: "15:14" , primary: false }, other: { ref: null }},
{pericope: 122 , title: "The Parable of the Sower" , Matt: { ref: "13:1-9" , primary: true }, Mark: { ref: "4:1-9" , primary: true }, Luke: { ref: "8:4-8" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 123 , title: "The Reason for Speaking in Parables" , Matt: { ref: "13:10-17" , primary: true }, Mark: { ref: "4:10-12; 4:25" , primary: true }, Luke: { ref: "8:9-10; 8:18b; 10:23-24" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 124 , title: "Interpretation of the Parable of the Sower" , Matt: { ref: "13:18-23" , primary: true }, Mark: { ref: "4:13-20" , primary: true }, Luke: { ref: "8:11-15" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 125 , title: "'He who has Ears to Hear, Let him Hear'" , Matt: { ref: "5:15; 10:26; 7:2; 13:12" , primary: false }, Mark: { ref: "4:21-25" , primary: true }, Luke: { ref: "8:16-18" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 126 , title: "The Parable of the Seed Growing Secretly" , Matt: { ref: null , primary: false }, Mark: { ref: "4:26-29" , primary: true }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 127 , title: "The Parable of the Tares" , Matt: { ref: "13:24-30" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 128 , title: "The Parable of the Mustard Seed" , Matt: { ref: "13:31-32" , primary: true }, Mark: { ref: "4:30-32" , primary: true }, Luke: { ref: "13:18-19" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 129 , title: "The Parable of the Leaven" , Matt: { ref: "13:33" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "13:20-21" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 130 , title: "Jesus' Use of Parables" , Matt: { ref: "13:34-35" , primary: true }, Mark: { ref: "4:33-34" , primary: true }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 131 , title: "Interpretation of the Parable of the Tares" , Matt: { ref: "13:36-43" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 132 , title: "The Parables of the Hidden Treasure and of the Pearl" , Matt: { ref: "13:44-46" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 133 , title: "The Parable of the Net" , Matt: { ref: "13:47-50" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 134 , title: "Treasures New and Old" , Matt: { ref: "13:51-52" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 135 , title: "Jesus' True Kindred" , Matt: { ref: "12:46-50" , primary: false }, Mark: { ref: "3:31-35" , primary: false }, Luke: { ref: "8:19-21" , primary: true }, John: { ref: "15:14" , primary: false }, other: { ref: null }},
{pericope: 136 , title: "Stilling the Storm" , Matt: { ref: "8:23-27" , primary: false }, Mark: { ref: "4:35-41" , primary: true }, Luke: { ref: "8:22-25" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 137 , title: "The Gerasene Demoniac" , Matt: { ref: "8:28-34" , primary: false }, Mark: { ref: "5:1-20" , primary: true }, Luke: { ref: "8:26-39" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 138 , title: "Jairus' Daughter and the Woman with a Hemorrhage" , Matt: { ref: "9:18-26" , primary: false }, Mark: { ref: "5:21-43" , primary: true }, Luke: { ref: "8:40-56" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 139 , title: "Jesus is Rejected at Nazareth" , Matt: { ref: "13:53-58" , primary: true }, Mark: { ref: "6:1-6a" , primary: true }, Luke: { ref: "4:16-30" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 140 , title: "Second Journey (to Jerusalem)" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "5:1" , primary: true }, other: { ref: null }},
{pericope: 141 , title: "The Healing at the Pool" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "5:2-47" , primary: true }, other: { ref: null }},
{pericope: 142 , title: "Commissioning the Twelve" , Matt: { ref: "9:35; 10:1,7-11,14" , primary: false }, Mark: { ref: "6:6b-13" , primary: true }, Luke: { ref: "9:1-6" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 143 , title: "Opinions regarding Jesus" , Matt: { ref: "14:1-2" , primary: true }, Mark: { ref: "6:14-16" , primary: true }, Luke: { ref: "9:7-9" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 144 , title: "The Death of John the Baptist" , Matt: { ref: "14:3-12" , primary: true }, Mark: { ref: "6:17-29" , primary: true }, Luke: { ref: "3:19-20" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 145 , title: "The Return of the Apostles" , Matt: { ref: null , primary: false }, Mark: { ref: "6:30-31" , primary: true }, Luke: { ref: "9:10a" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 146 , title: "Five Thousand are Fed" , Matt: { ref: "14:13-21" , primary: true }, Mark: { ref: "6:32-44" , primary: true }, Luke: { ref: "9:10b-17" , primary: true }, John: { ref: "6:1-15" , primary: true }, other: { ref: null }},
{pericope: 147 , title: "The Walking on the Water" , Matt: { ref: "14:22-33" , primary: true }, Mark: { ref: "6:45-52" , primary: true }, Luke: { ref: null , primary: false }, John: { ref: "6:16-21" , primary: true }, other: { ref: null }},
{pericope: 148 , title: "Healings at Gennesaret" , Matt: { ref: "14:34-36" , primary: true }, Mark: { ref: "6:53-56" , primary: true }, Luke: { ref: null , primary: false }, John: { ref: "6:22-25" , primary: true }, other: { ref: null }},
{pericope: 149 , title: "The Bread of Life" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "6:26-59" , primary: true }, other: { ref: null }},
{pericope: 150 , title: "Defilement - Traditional and Real" , Matt: { ref: "15:1-20" , primary: true }, Mark: { ref: "7:1-23" , primary: true }, Luke: { ref: "11:37-41; 6:39" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 151 , title: "The Syrophoenician (Canaanite) Woman" , Matt: { ref: "15:21-28" , primary: true }, Mark: { ref: "7:24-30" , primary: true }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 152 , title: "Jesus Heals a Deaf Mute and Many Others" , Matt: { ref: "15:29-31" , primary: true }, Mark: { ref: "7:31-37" , primary: true }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 153 , title: "Four Thousand are Fed" , Matt: { ref: "15:32-39" , primary: true }, Mark: { ref: "8:1-10" , primary: true }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 154 , title: "The Pharisees Seek a Sign" , Matt: { ref: "16:1-4; 12:38-39" , primary: true }, Mark: { ref: "8:11-13" , primary: true }, Luke: { ref: "11:16; 12:54-56; 11:29" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 155 , title: "The Leaven of the Pharisees" , Matt: { ref: "16:5-12" , primary: true }, Mark: { ref: "8:14-21" , primary: true }, Luke: { ref: "12:1" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 156 , title: "A Blind Man is Healed at Bethsaida" , Matt: { ref: null , primary: false }, Mark: { ref: "8:22-26" , primary: true }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 157 , title: "Many Disciples Take Offense at Jesus" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "6:60-66" , primary: true }, other: { ref: null }},
{pericope: 158 , title: "Peter's Confession" , Matt: { ref: "16:13-20" , primary: true }, Mark: { ref: "8:27-30" , primary: true }, Luke: { ref: "9:18-21" , primary: true }, John: { ref: "6:67-71" , primary: true }, other: { ref: null }},
{pericope: 159 , title: "Jesus Foretells His Passion" , Matt: { ref: "16:21-23" , primary: true }, Mark: { ref: "8:31-33" , primary: true }, Luke: { ref: "9:22" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 160 , title: "'If Any Man would Come after Me'" , Matt: { ref: "16:24-28" , primary: true }, Mark: { ref: "8:34-38; 9:1" , primary: true }, Luke: { ref: "9:23-27" , primary: true }, John: { ref: "12:25" , primary: false }, other: { ref: "2 Tim 2:12" }},
{pericope: 161 , title: "The Transfiguration" , Matt: { ref: "17:1-9" , primary: true }, Mark: { ref: "9:2-10" , primary: true }, Luke: { ref: "9:28-36" , primary: true }, John: { ref: null , primary: false }, other: { ref: "2 Pet 1:16-18" }},
{pericope: 162 , title: "The Coming of Elijah" , Matt: { ref: "17:10-13" , primary: true }, Mark: { ref: "9:11-13" , primary: true }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 163 , title: "Jesus Heals a Boy Possessed by a Spirit" , Matt: { ref: "17:14-21" , primary: true }, Mark: { ref: "9:14-29" , primary: true }, Luke: { ref: "9:37-43a; 17:6" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 164 , title: "Jesus Foretells His Passion again" , Matt: { ref: "17:22-23" , primary: true }, Mark: { ref: "9:30-32" , primary: true }, Luke: { ref: "9:43b-45" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 165 , title: "Payment of the Temple Tax" , Matt: { ref: "17:24-27" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 166 , title: "True Greatness" , Matt: { ref: "18:1-5" , primary: true }, Mark: { ref: "9:33-37" , primary: true }, Luke: { ref: "9:46-48" , primary: true }, John: { ref: "13:2" , primary: false }, other: { ref: null }},
{pericope: 167 , title: "The Strange Exorcist" , Matt: { ref: "10:42" , primary: false }, Mark: { ref: "9:38-41" , primary: true }, Luke: { ref: "9:49-50" , primary: true }, John: { ref: null , primary: false }, other: { ref: "1 Cor 12:3" }},
{pericope: 168 , title: "Warnings concerning Temptations" , Matt: { ref: "18:6-9; 5:13" , primary: true }, Mark: { ref: "9:42-50" , primary: true }, Luke: { ref: "17:1-2; 14:34-35" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 169 , title: "The Parable of the Lost Sheep" , Matt: { ref: "18:10-14" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "15:3-7" , primary: false }, John: { ref: null , primary: false }, other: { ref: "2 Pet 3:9" }},
{pericope: 170 , title: "On Reproving One's Brother" , Matt: { ref: "18:15-18" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "17:3" , primary: false }, John: { ref: "20:23" , primary: false }, other: { ref: null }},
{pericope: 171 , title: "'Where Two or Three are Gathered Together'" , Matt: { ref: "18:19-20" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 172 , title: "On Reconciliation" , Matt: { ref: "18:21-22" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "17:4" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 173 , title: "The Parable of the Unforgiving Servant" , Matt: { ref: "18:23-35" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 174 , title: "Decision to Go to Jerusalem" , Matt: { ref: "19:1-2" , primary: false }, Mark: { ref: "10:1" , primary: false }, Luke: { ref: "9:51" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 175 , title: "Jesus is Rejected by Samaritans" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "9:52-56" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 176 , title: "On Following Jesus" , Matt: { ref: "8:18-22" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "9:57-62" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 177 , title: "Commissioning the Seventy" , Matt: { ref: "9:37-38; 10:7-16" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "10:1-12" , primary: true }, John: { ref: null , primary: false }, other: { ref: "1 Cor 9:5-14; 1 Tim 5:18; Jas 5:4" }},
{pericope: 178 , title: "Woes Pronounced on Galilaean Cities" , Matt: { ref: "11:20-24" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "10:13-15" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 179 , title: "'He who Hears You, Hears Me'" , Matt: { ref: "10:4" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "10:16" , primary: true }, John: { ref: "13:2" , primary: false }, other: { ref: null }},
{pericope: 180 , title: "The Return of the Seventy" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "10:17-20" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 181 , title: "Jesus' Thanksgiving to the Father, and the Blessedness of the Disciples" , Matt: { ref: "11:25-27; 13:16-17" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "10:21-24" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 182 , title: "The Lawyer's Question" , Matt: { ref: "22:34-40" , primary: false }, Mark: { ref: "12:28-34" , primary: false }, Luke: { ref: "10:25-28" , primary: true }, John: { ref: null , primary: false }, other: { ref: "Romans 13:8-10; Gal 5:14; Jas 2:8" }},
{pericope: 183 , title: "The Parable of the Good Samaritan" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "10:29-37" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 184 , title: "Mary and Martha" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "10:38-42" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 185 , title: "The Lord's Prayer" , Matt: { ref: "6:9-13" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "11:1-4" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 186 , title: "The Importunate Friend at Midnight" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "11:5-8" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 187 , title: "Encouragement to Pray" , Matt: { ref: "7:7-11" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "11:9-13" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 188 , title: "The Beelzebub Controversy" , Matt: { ref: "12:22-30" , primary: false }, Mark: { ref: "3:22-27" , primary: false }, Luke: { ref: "11:14-23" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 189 , title: "The Return of the Evil Spirit" , Matt: { ref: "12:43-45" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "11:24-26" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 190 , title: "True Blessedness" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "11:27-28" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 191 , title: "The Sign of Jonah" , Matt: { ref: "12:38-42" , primary: false }, Mark: { ref: "8:11-12" , primary: false }, Luke: { ref: "11:29-32" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 192 , title: "Concerning Light" , Matt: { ref: "5:15" , primary: false }, Mark: { ref: "4:21" , primary: false }, Luke: { ref: "11:33" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 193 , title: "The Sound Eye" , Matt: { ref: "6:22-23" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "11:34-36" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 194 , title: "Discourses against the Pharisees and Lawyers" , Matt: { ref: "15:1-9" , primary: false }, Mark: { ref: "7:1-9" , primary: false }, Luke: { ref: "11:37-54" , primary: true }, John: { ref: null , primary: false }, other: { ref: "Acts 7:51-53" }},
{pericope: 195 , title: "The Leaven of the Pharisees" , Matt: { ref: "16:5-6" , primary: false }, Mark: { ref: "8:14-15" , primary: false }, Luke: { ref: "12:1" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 196 , title: "Exhortation to Fearless Confession" , Matt: { ref: "10:26-33" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "12:2-9" , primary: true }, John: { ref: null , primary: false }, other: { ref: "Acts 27:34; 2 Tim 2:12; Rev 3:5" }},
{pericope: 197 , title: "The Sin against the Holy Spirit" , Matt: { ref: "12:31-32" , primary: false }, Mark: { ref: "3:28-30" , primary: false }, Luke: { ref: "12:1" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 198 , title: "The Assistance of the Holy Spirit" , Matt: { ref: "10:19-20" , primary: false }, Mark: { ref: "13:11" , primary: false }, Luke: { ref: "12:11-12; 21:14-15" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 199 , title: "Warning against Avarice" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "12:13-15" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 200 , title: "The Parable of the Rich Fool" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "12:16-21" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 201 , title: "Anxieties about Earthly Things" , Matt: { ref: "6:25-34" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "12:22-32" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 202 , title: "Treasures in Heaven" , Matt: { ref: "6:19-21" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "12:33-34" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 203 , title: "Watchfulness and Faithfulness" , Matt: { ref: "24:42-51" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "12:35-48" , primary: true }, John: { ref: null , primary: false }, other: { ref: "1 Thess 5:2; Rev 16:15" }},
{pericope: 204 , title: "Division in Households" , Matt: { ref: "10:34-36" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "12:49-53" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 205 , title: "Interpreting the Times" , Matt: { ref: "16:2-3" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "12:54-56" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 206 , title: "Agreement with One's Accuser" , Matt: { ref: "5:25-26" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "12:57-59" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 207 , title: "Repentance or Destruction (the Parable of the Barren Fig Tree)" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "13:1-9" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 208 , title: "The Healing of the Crippled Woman on the Sabbath" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "13:10-17" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 209 , title: "The Parable of the Mustard Seed" , Matt: { ref: "13:31-32" , primary: false }, Mark: { ref: "4:30-32" , primary: false }, Luke: { ref: "13:18-19" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 210 , title: "The Parable of the Leaven" , Matt: { ref: "13:33" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "13:20-21" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 211 , title: "Exclusion from the Kingdom" , Matt: { ref: "7:13-14; 7:22-23; 8:11-12; 19:30" , primary: false }, Mark: { ref: "10:31" , primary: false }, Luke: { ref: "13:22-30" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 212 , title: "A Warning against Herod" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "13:31-33" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 213 , title: "The Lament over Jerusalem" , Matt: { ref: "23:37-39" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "13:34-35" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 214 , title: "The Healing of the Man with Dropsy" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "14:1-6" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 215 , title: "Teaching on Humility" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "14:7-14" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 216 , title: "The Parable of the Great Supper" , Matt: { ref: "22:1-14" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "14:15-24" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 217 , title: "The Conditions of Discipleship" , Matt: { ref: "10:37-38" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "14:25-33" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 218 , title: "The Parable of Salt" , Matt: { ref: "5:13" , primary: false }, Mark: { ref: "9:49-50" , primary: false }, Luke: { ref: "14:34-35" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 219 , title: "The Parable of the Lost Sheep" , Matt: { ref: "18:12-14" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "15:1-7" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 220 , title: "The Parable of the Lost Coin" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "15:8-10" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 221 , title: "The Parable of the Prodigal Son" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "15:11-32" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 222 , title: "The Parable of the Unjust Steward" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "16:1-9" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 223 , title: "On Faithfulness in What is Least" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "16:10-12" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 224 , title: "On Serving Two Masters" , Matt: { ref: "6:24" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "16:13" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 225 , title: "The Pharisees Reproved" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "16:14-15" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 226 , title: "Concerning the Law" , Matt: { ref: "11:12-13; 5:18" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "16:16-17" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 227 , title: "Concerning Divorce" , Matt: { ref: "19:9" , primary: false }, Mark: { ref: "10:11-12" , primary: false }, Luke: { ref: "16:18" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 228 , title: "The Parable of the Rich Man and Lazarus" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "16:19-31" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 229 , title: "Warning against Offenses" , Matt: { ref: "18:6-7" , primary: false }, Mark: { ref: "9:42" , primary: false }, Luke: { ref: "17:1-3a" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 230 , title: "On Forgiveness" , Matt: { ref: "18:15" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "17:3b-4" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 231 , title: "On Faith" , Matt: { ref: "17:19-21" , primary: false }, Mark: { ref: "9:28-29" , primary: false }, Luke: { ref: "17:5-6" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 232 , title: "We are Unprofitable Servants" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "17:7-10" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 233 , title: "The Cleansing of the Ten Lepers" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "17:11-19" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 234 , title: "On the Coming of the Kingdom of God" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "17:20-21" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 235 , title: "The Day of the Son of Man" , Matt: { ref: "24:23; 24:26-27; 24:37-39; 24:17-18; 10:39; 24:40-41; 24:28" , primary: false }, Mark: { ref: "13:19-23; 13:14-16" , primary: false }, Luke: { ref: "17:22-37" , primary: true }, John: { ref: "12:25" , primary: false }, other: { ref: null }},
{pericope: 236 , title: "The Parable of the Unjust Judge" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "18:1-8" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 237 , title: "The Pharisee and the Publican" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "18:9-14" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 238 , title: "Jesus Remains in Galilee" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "7:1-9" , primary: true }, other: { ref: null }},
{pericope: 239 , title: "Journey to Jerusalem in Secret" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "7:10-13" , primary: true }, other: { ref: null }},
{pericope: 240 , title: "Teaching in the Temple" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "7:14-39" , primary: true }, other: { ref: null }},
{pericope: 241 , title: "Division among the People regarding Jesus" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "7:40-52" , primary: true }, other: { ref: null }},
{pericope: 242 , title: "The Woman Caught in Adultery" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "7:53; 8:1-11" , primary: true }, other: { ref: null }},
{pericope: 243 , title: "'I am the Light of the World'" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "8:12-20" , primary: true }, other: { ref: null }},
{pericope: 244 , title: "Discussion with the Jews" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "8:21-29" , primary: true }, other: { ref: null }},
{pericope: 245 , title: "'The Truth will Make You Free'" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "8:30-36" , primary: true }, other: { ref: null }},
{pericope: 246 , title: "Children of the Devil" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "8:37-47" , primary: true }, other: { ref: null }},
{pericope: 247 , title: "'Before Abraham was, I am'" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "8:48-59" , primary: true }, other: { ref: null }},
{pericope: 248 , title: "Jesus Heals the Man Born Blind" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "9:1-41" , primary: true }, other: { ref: null }},
{pericope: 249 , title: "'I am the Good Shepherd'" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "10:1-18" , primary: true }, other: { ref: null }},
{pericope: 250 , title: "Division among the Jews again" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "10:19-21" , primary: true }, other: { ref: null }},
{pericope: 251 , title: "Departure to Judea" , Matt: { ref: "19:1-2" , primary: true }, Mark: { ref: "10:1" , primary: true }, Luke: { ref: "9:51" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 252 , title: "On Divorce and Celibacy" , Matt: { ref: "19:3-12" , primary: true }, Mark: { ref: "10:2-12" , primary: true }, Luke: { ref: "16:18" , primary: false }, John: { ref: null , primary: false }, other: { ref: "1 Cor 7:10-16" }},
{pericope: 253 , title: "Jesus Blesses the Children" , Matt: { ref: "19:13-15" , primary: true }, Mark: { ref: "10:13-16" , primary: true }, Luke: { ref: "18:15-17" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 254 , title: "The Rich Young Man" , Matt: { ref: "19:16-22" , primary: true }, Mark: { ref: "10:17-22" , primary: true }, Luke: { ref: "18:18-23" , primary: true }, John: { ref: null , primary: false }, other: { ref: "Romans 13:9" }},
{pericope: 255 , title: "On Riches and the Rewards of Discipleship" , Matt: { ref: "19:23-30" , primary: true }, Mark: { ref: "10:23-31" , primary: true }, Luke: { ref: "18:24-30; 22:28-30" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 256 , title: "The Parable of the Laborers in the Vineyard" , Matt: { ref: "20:1-16" , primary: true }, Mark: { ref: "10:31" , primary: false }, Luke: { ref: "13:3" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 257 , title: "Jesus at the Feast of Dedication in Jerusalem" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "10:22-39" , primary: true }, other: { ref: null }},
{pericope: 258 , title: "Jesus Withdraws across the Jordan" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "10:40-42" , primary: true }, other: { ref: null }},
{pericope: 259 , title: "The Raising of Lazarus" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "11:1-44" , primary: true }, other: { ref: null }},
{pericope: 260 , title: "The Chief Priests and Pharisees Take Counsel against Jesus" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "11:45-53" , primary: true }, other: { ref: null }},
{pericope: 261 , title: "Jesus Retires to Ephraim" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "11:54-57" , primary: true }, other: { ref: null }},
{pericope: 262 , title: "The Third Prediction of the Passion" , Matt: { ref: "20:17-19" , primary: true }, Mark: { ref: "10:32-34" , primary: true }, Luke: { ref: "18:31-34" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 263 , title: "The Sons of Zebedee; Precedence among the Disciples" , Matt: { ref: "20:20-28" , primary: true }, Mark: { ref: "10:35-45" , primary: true }, Luke: { ref: "22:24-27" , primary: false }, John: { ref: null , primary: false }, other: { ref: "1 Tim 2:5-6" }},
{pericope: 264 , title: "The Healing of the Blind Men (Bartimaeus)" , Matt: { ref: "20:29-34; 9:27-31" , primary: true }, Mark: { ref: "10:46-52" , primary: true }, Luke: { ref: "18:35-43" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 265 , title: "Zacchaeus" , Matt: { ref: "18:11" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "19:1-10" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 266 , title: "The Parable of the Pounds" , Matt: { ref: "25:14-30" , primary: false }, Mark: { ref: "13:34" , primary: false }, Luke: { ref: "19:11-27" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 267 , title: "The Anointing at Bethany" , Matt: { ref: "26:6-13" , primary: false }, Mark: { ref: "14:3-9" , primary: false }, Luke: { ref: "7:36-50" , primary: false }, John: { ref: "12:1-8" , primary: true }, other: { ref: null }},
{pericope: 268 , title: "The Plot against Lazarus" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "12:9-11" , primary: true }, other: { ref: null }},
{pericope: 269 , title: "The Triumphal Entry" , Matt: { ref: "21:1-9" , primary: true }, Mark: { ref: "11:1-10" , primary: true }, Luke: { ref: "19:28-40" , primary: true }, John: { ref: "12:12-19" , primary: true }, other: { ref: null }},
{pericope: 270 , title: "Jesus Weeps over Jerusalem" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "19:41-44" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 271 , title: "Jesus in Jerusalem (Cleansing the Temple), Return to Bethany" , Matt: { ref: "21:10-17" , primary: true }, Mark: { ref: "11:11; 11:15-17" , primary: true }, Luke: { ref: "19:45-46" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 272 , title: "The Cursing of the Fig Tree" , Matt: { ref: "21:18-19" , primary: true }, Mark: { ref: "11:12-14" , primary: true }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 273 , title: "The Cleansing of the Temple" , Matt: { ref: "21:12-13" , primary: false }, Mark: { ref: "11:15-17" , primary: true }, Luke: { ref: "19:45-46" , primary: true }, John: { ref: "2:13-17" , primary: false }, other: { ref: null }},
{pericope: 274 , title: "The Chief Priests and Scribes Conspire against Jesus" , Matt: { ref: null , primary: false }, Mark: { ref: "11:18-19" , primary: true }, Luke: { ref: "19:47-48" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 275 , title: "The Fig Tree is Withered" , Matt: { ref: "21:20-22; 6:14-15" , primary: true }, Mark: { ref: "11:20-26" , primary: true }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 276 , title: "The Question about Authority" , Matt: { ref: "21:23-27" , primary: true }, Mark: { ref: "11:27-33" , primary: true }, Luke: { ref: "20:1-8" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 277 , title: "The Parable of the Two Sons" , Matt: { ref: "21:28-32" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 278 , title: "The Parable of the Wicked Husbandmen" , Matt: { ref: "21:33-46" , primary: true }, Mark: { ref: "12:1-12" , primary: true }, Luke: { ref: "20:9-19" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 279 , title: "The Parable of the Great Supper" , Matt: { ref: "22:1-14" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "14:15-24" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 280 , title: "On Paying Tribute to Caesar" , Matt: { ref: "22:15-22" , primary: true }, Mark: { ref: "12:13-17" , primary: true }, Luke: { ref: "20:20-26" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 281 , title: "The Question about the Resurrection" , Matt: { ref: "22:23-33" , primary: true }, Mark: { ref: "12:18-27" , primary: true }, Luke: { ref: "20:27-40" , primary: true }, John: { ref: null , primary: false }, other: { ref: "1 Cor 15:40-44" }},
{pericope: 282 , title: "The Great Commandment" , Matt: { ref: "22:34-40" , primary: true }, Mark: { ref: "12:28-34" , primary: true }, Luke: { ref: "10:25-28" , primary: false }, John: { ref: null , primary: false }, other: { ref: "Romans 13:8-10; Gal 5:14; Jas 2:8" }},
{pericope: 283 , title: "The Question about David's Son" , Matt: { ref: "22:41-46" , primary: true }, Mark: { ref: "12:35-37a" , primary: true }, Luke: { ref: "20:41-44" , primary: true }, John: { ref: null , primary: false }, other: { ref: "Acts 2:29-36; Heb 10:12-13" }},
{pericope: 284 , title: "Woe to the Scribes and Pharisees" , Matt: { ref: "23:1-36" , primary: true }, Mark: { ref: "12:37b-40" , primary: true }, Luke: { ref: "20:45-47" , primary: true }, John: { ref: null , primary: false }, other: { ref: "Acts 7:51-53" }},
{pericope: 285 , title: "Jesus' Lament over Jerusalem" , Matt: { ref: "23:37-39" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "13:34-35" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 286 , title: "The Widow's Mite" , Matt: { ref: null , primary: false }, Mark: { ref: "12:41-44" , primary: true }, Luke: { ref: "21:1-4" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 287 , title: "Prediction of the Destruction of the Temple" , Matt: { ref: "24:1-2" , primary: true }, Mark: { ref: "13:1-2" , primary: true }, Luke: { ref: "21:5-6" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 288 , title: "Signs before the End" , Matt: { ref: "24:3-8" , primary: true }, Mark: { ref: "13:3-8" , primary: true }, Luke: { ref: "21:7-11" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 289 , title: "Persecutions Foretold" , Matt: { ref: "24:9-14; 10:17-22a" , primary: true }, Mark: { ref: "13:9-13" , primary: true }, Luke: { ref: "21:12-19; 12:11-12" , primary: true }, John: { ref: null , primary: false }, other: { ref: "2 Tim 2:12; 2 Pet 3:3" }},
{pericope: 290 , title: "The Desolating Sacrilege" , Matt: { ref: "24:15-22" , primary: true }, Mark: { ref: "13:14-20" , primary: true }, Luke: { ref: "21:20-24" , primary: true }, John: { ref: null , primary: false }, other: { ref: "2 Thess 2:3-4" }},
{pericope: 291 , title: "False Christs and False Prophets" , Matt: { ref: "24:23-28" , primary: true }, Mark: { ref: "13:21-23" , primary: true }, Luke: { ref: "17:23-24; 17:37b" , primary: false }, John: { ref: null , primary: false }, other: { ref: "2 Thess 2:8-10" }},
{pericope: 292 , title: "The Coming of the Son of Man" , Matt: { ref: "24:29-31" , primary: true }, Mark: { ref: "13:24-27" , primary: true }, Luke: { ref: "21:25-28" , primary: true }, John: { ref: null , primary: false }, other: { ref: "1 Thess 4:16" }},
{pericope: 293 , title: "The Time of the Coming: the Parable of the Fig Tree" , Matt: { ref: "24:32-36" , primary: true }, Mark: { ref: "13:28-32" , primary: true }, Luke: { ref: "21:29-33" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 294 , title: "Conclusion: 'Take Heed, Watch!' (According to Mark)" , Matt: { ref: "25:13-15; 24:42" , primary: false }, Mark: { ref: "13:33-37" , primary: true }, Luke: { ref: "19:12-13; 12:40" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 295 , title: "Conclusion: 'Take Heed, Watch!' (According to Luke)" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "21:34-36" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 296 , title: "The Parable of the Flood and Exhortation to Watchfulness" , Matt: { ref: "24:37-44" , primary: true }, Mark: { ref: "13:35" , primary: false }, Luke: { ref: "17:26-36; 12:39-40" , primary: false }, John: { ref: null , primary: false }, other: { ref: "1 Thess 5:1-6; 2 Pet 3:10; Rev 3:3; Rev 16:15" }},
{pericope: 297 , title: "The Parable of the Good Servant and the Wicked Servant" , Matt: { ref: "24:45-51" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: "12:41-46" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 298 , title: "The Parable of the Ten Virgins" , Matt: { ref: "25:1-13" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 299 , title: "The Parable of the Talents" , Matt: { ref: "25:14-30" , primary: true }, Mark: { ref: "13:34" , primary: false }, Luke: { ref: "19:11-27" , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 300 , title: "The Last Judgment" , Matt: { ref: "25:31-46" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "5:29" , primary: false }, other: { ref: "Romans 14:10; 2 Cor 5:10" }},
{pericope: 301 , title: "The Ministry of Jesus in Jerusalem" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "21:37-38" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 302 , title: "Greeks Seek Jesus; Discourse on His Death" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "12:20-36" , primary: true }, other: { ref: "1 Cor 15:35-44" }},
{pericope: 303 , title: "The Unbelief of the People" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "12:37-43" , primary: true }, other: { ref: null }},
{pericope: 304 , title: "Judgment by the Word" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "12:44-50" , primary: true }, other: { ref: null }},
{pericope: 305 , title: "Jesus' Death is Premeditated" , Matt: { ref: "26:1-5" , primary: true }, Mark: { ref: "14:1-2" , primary: true }, Luke: { ref: "22:1-2" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 306 , title: "The Anointing in Bethany" , Matt: { ref: "26:6-13" , primary: true }, Mark: { ref: "14:3-9" , primary: true }, Luke: { ref: "7:36-50" , primary: false }, John: { ref: "12:1-8" , primary: false }, other: { ref: null }},
{pericope: 307 , title: "The Betrayal by Judas" , Matt: { ref: "26:14-16" , primary: true }, Mark: { ref: "14:10-11" , primary: true }, Luke: { ref: "22:3-6" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 308 , title: "Preparation for the Passover" , Matt: { ref: "26:17-20" , primary: true }, Mark: { ref: "14:12-17" , primary: true }, Luke: { ref: "22:7-14" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 309 , title: "Washing the Disciples' Feet" , Matt: { ref: "10:24; 10:40" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "6:4" , primary: false }, John: { ref: "13:1-20" , primary: true }, other: { ref: null }},
{pericope: 310 , title: "Jesus Foretells His Betrayal" , Matt: { ref: "26:21-25" , primary: true }, Mark: { ref: "14:18-21" , primary: true }, Luke: { ref: "22:21-23" , primary: false }, John: { ref: "13:21-30" , primary: true }, other: { ref: null }},
{pericope: 311 , title: "The Last Supper" , Matt: { ref: "26:26-29" , primary: true }, Mark: { ref: "14:22-25" , primary: true }, Luke: { ref: "22:15-20" , primary: true }, John: { ref: null , primary: false }, other: { ref: "1 Cor 5:7; 1 Cor 10:16-17; 1 Cor 11:23-26" }},
{pericope: 312 , title: "Jesus Foretells His Betrayal" , Matt: { ref: "26:21-25" , primary: false }, Mark: { ref: "14:18-21" , primary: false }, Luke: { ref: "22:21-23" , primary: true }, John: { ref: "13:21-30" , primary: false }, other: { ref: null }},
{pericope: 313 , title: "Precedence among the Disciples and the Reward of Discipleship" , Matt: { ref: "20:24-28; 19:28" , primary: false }, Mark: { ref: "10:41-45" , primary: false }, Luke: { ref: "22:24-30" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 314 , title: "The New Commandment of Love" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "13:31-35" , primary: true }, other: { ref: null }},
{pericope: 315 , title: "Peter's Denial Predicted" , Matt: { ref: "26:30-35" , primary: true }, Mark: { ref: "14:26-31" , primary: true }, Luke: { ref: "22:31-34" , primary: true }, John: { ref: "13:36-38" , primary: true }, other: { ref: null }},
{pericope: 316 , title: "The Two Swords" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "22:35-38" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 317 , title: "'Let Not Your Hearts be Troubled'" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "14:1-14" , primary: true }, other: { ref: null }},
{pericope: 318 , title: "The Promise of the Paraclete" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "14:15-26" , primary: true }, other: { ref: "1 John 2:1-2" }},
{pericope: 319 , title: "The Gift of Peace" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "14:27-31" , primary: true }, other: { ref: null }},
{pericope: 320 , title: "Jesus the True Vine" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "15:1-8" , primary: true }, other: { ref: null }},
{pericope: 321 , title: "'Abide in My Love'" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "15:9-17" , primary: true }, other: { ref: null }},
{pericope: 322 , title: "The World's Hatred" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "15:18-25" , primary: true }, other: { ref: null }},
{pericope: 323 , title: "The Witness of the Paraclete" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "15:26-27" , primary: true }, other: { ref: null }},
{pericope: 324 , title: "On Persecutions" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "16:1-4" , primary: true }, other: { ref: null }},
{pericope: 325 , title: "The Work of the Paraclete" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "16:5-15" , primary: true }, other: { ref: null }},
{pericope: 326 , title: "Sorrow Turned to Joy" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "16:16-22" , primary: true }, other: { ref: null }},
{pericope: 327 , title: "Prayer in the Name of Jesus" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "16:23-28" , primary: true }, other: { ref: null }},
{pericope: 328 , title: "Prediction of the Disciples' Flight" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "16:29-33" , primary: true }, other: { ref: null }},
{pericope: 329 , title: "The Intercessory Prayer" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "17:1-26" , primary: true }, other: { ref: null }},
{pericope: 330 , title: "Gethsemane" , Matt: { ref: "26:36-46" , primary: true }, Mark: { ref: "14:32-42" , primary: true }, Luke: { ref: "22:39-46" , primary: true }, John: { ref: "18:1; 12:27" , primary: true }, other: { ref: "Heb 5:7" }},
{pericope: 331 , title: "Jesus Arrested" , Matt: { ref: "26:47-56" , primary: true }, Mark: { ref: "14:43-52" , primary: true }, Luke: { ref: "22:47-53" , primary: true }, John: { ref: "18:2-12" , primary: true }, other: { ref: "Rev 13:10" }},
{pericope: 332 , title: "Jesus before the Sanhedrin (Peter's Denial)" , Matt: { ref: "26:57-68" , primary: true }, Mark: { ref: "14:53-65" , primary: true }, Luke: { ref: "22:54-71" , primary: true }, John: { ref: "18:13-24" , primary: true }, other: { ref: "Acts 6:14" }},
{pericope: 333 , title: "Peter's Denial" , Matt: { ref: "26:69-75" , primary: true }, Mark: { ref: "14:66-72" , primary: true }, Luke: { ref: "22:56-62" , primary: false }, John: { ref: "18:25-27" , primary: true }, other: { ref: null }},
{pericope: 334 , title: "Jesus Delivered to Pilate" , Matt: { ref: "27:1-2" , primary: true }, Mark: { ref: "15:1" , primary: true }, Luke: { ref: "23:1" , primary: true }, John: { ref: "18:28" , primary: true }, other: { ref: null }},
{pericope: 335 , title: "The Death of Judas" , Matt: { ref: "27:3-10" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: "Acts 1:15-20" }},
{pericope: 336 , title: "The Trial before Pilate" , Matt: { ref: "27:11-14" , primary: true }, Mark: { ref: "15:2-5" , primary: true }, Luke: { ref: "23:2-5" , primary: true }, John: { ref: "18:29-38" , primary: true }, other: { ref: null }},
{pericope: 337 , title: "Jesus before Herod" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "23:6-12" , primary: true }, John: { ref: null , primary: false }, other: { ref: "Acts 4:27-28" }},
{pericope: 338 , title: "Pilate Declares Jesus Innocent" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "23:13-16" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 339 , title: "Jesus or Barabbas?" , Matt: { ref: "27:15-23" , primary: true }, Mark: { ref: "15:6-14" , primary: true }, Luke: { ref: "23:17-23" , primary: true }, John: { ref: "18:39-40" , primary: true }, other: { ref: "Acts 3:13-14; Acts 13:27-28" }},
{pericope: 340 , title: "'Behold the Man!'" , Matt: { ref: "27:28-31a" , primary: false }, Mark: { ref: "15:17-20a" , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "19:1-15" , primary: true }, other: { ref: null }},
{pericope: 341 , title: "Pilate Delivers Jesus to be Crucified" , Matt: { ref: "27:24-26" , primary: true }, Mark: { ref: "15:15" , primary: true }, Luke: { ref: "23:24-25" , primary: true }, John: { ref: "19:16" , primary: true }, other: { ref: null }},
{pericope: 342 , title: "Jesus Mocked by the Soldiers" , Matt: { ref: "27:27-31a" , primary: true }, Mark: { ref: "15:16-20a" , primary: true }, Luke: { ref: null , primary: false }, John: { ref: "19:2-3" , primary: false }, other: { ref: null }},
{pericope: 343 , title: "The Road to Golgotha" , Matt: { ref: "27:31b-32" , primary: true }, Mark: { ref: "15:20b-21" , primary: true }, Luke: { ref: "23:26-32" , primary: true }, John: { ref: "19:17" , primary: true }, other: { ref: null }},
{pericope: 344 , title: "The Crucifixion" , Matt: { ref: "27:33-37" , primary: true }, Mark: { ref: "15:22-26" , primary: true }, Luke: { ref: "23:33-34" , primary: true }, John: { ref: "19:17b-27" , primary: true }, other: { ref: "Acts 7:60" }},
{pericope: 345 , title: "Jesus Derided on the Cross" , Matt: { ref: "27:38-43" , primary: true }, Mark: { ref: "15:27-32a" , primary: true }, Luke: { ref: "23:35-38" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 346 , title: "The Two Thieves" , Matt: { ref: "27:44" , primary: true }, Mark: { ref: "15:32b" , primary: true }, Luke: { ref: "23:39-43" , primary: true }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 347 , title: "The Death of Jesus" , Matt: { ref: "27:45-54" , primary: true }, Mark: { ref: "15:33-39" , primary: true }, Luke: { ref: "23:44-48" , primary: true }, John: { ref: "19:28-30" , primary: true }, other: { ref: "Acts 7:59" }},
{pericope: 348 , title: "Witnesses of the Crucifixion" , Matt: { ref: "27:55-56" , primary: true }, Mark: { ref: "15:40-41" , primary: true }, Luke: { ref: "23:49" , primary: true }, John: { ref: "19:25-27" , primary: false }, other: { ref: null }},
{pericope: 349 , title: "Jesus' Side Pierced" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "19:31-37" , primary: true }, other: { ref: "1 John 5:6-8; Rev 1:7" }},
{pericope: 350 , title: "The Burial of Jesus" , Matt: { ref: "27:57-61" , primary: true }, Mark: { ref: "15:42-47" , primary: true }, Luke: { ref: "23:50-56" , primary: true }, John: { ref: "19:38-42" , primary: true }, other: { ref: "Acts 13:29" }},
{pericope: 351 , title: "The Guard at the Tomb" , Matt: { ref: "27:62-66" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 352 , title: "The Women at the Tomb" , Matt: { ref: "28:1-8" , primary: true }, Mark: { ref: "16:1-8" , primary: true }, Luke: { ref: "24:1-12" , primary: true }, John: { ref: "20:1-13" , primary: true }, other: { ref: null }},
{pericope: 353 , title: "Jesus Appears to the Women" , Matt: { ref: "28:9-10" , primary: true }, Mark: { ref: "16:9-11" , primary: false }, Luke: { ref: "24:10-11" , primary: false }, John: { ref: "20:14-18" , primary: true }, other: { ref: null }},
{pericope: 354 , title: "The Report of the Guard" , Matt: { ref: "28:11-15" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 355 , title: "Jesus Appears to Two on the Way to Emmaus" , Matt: { ref: null , primary: false }, Mark: { ref: "16:12-13" , primary: false }, Luke: { ref: "24:13-35" , primary: true }, John: { ref: null , primary: false }, other: { ref: "Acts 10:41; Acts 13:31" }},
{pericope: 356 , title: "Jesus Appears to His Disciples (Thomas being Absent)" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: "24:36-43" , primary: true }, John: { ref: "20:19-23" , primary: true }, other: { ref: null }},
{pericope: 357 , title: "Jesus Appears to His Disciples (Thomas being Present)" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "20:24-29" , primary: true }, other: { ref: null }},
{pericope: 358 , title: "Jesus Appears to the Eleven While They Sit at Table" , Matt: { ref: null , primary: false }, Mark: { ref: "16:14-18" , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 359 , title: "Jesus Appears to the Eleven on a Mountain in Galilee" , Matt: { ref: "28:16-20" , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 360 , title: "Jesus Appears to His Disciples by the Sea of Tiberias" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "21:1-14" , primary: false }, other: { ref: null }},
{pericope: 361 , title: "Paul's Account of the Appearances of Jesus" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: "1 Cor 15:3-8" }},
{pericope: 362 , title: "The Shorter Ending of Mark" , Matt: { ref: null , primary: false }, Mark: { ref: "16:21" , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 363 , title: "The Longer Ending of Mark" , Matt: { ref: null , primary: false }, Mark: { ref: "16:9-20" , primary: true }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 364 , title: "The Ending of Matthew: The Great Commission" , Matt: { ref: "28:16-20" , primary: true }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: null , primary: false }, other: { ref: null }},
{pericope: 365 , title: "The Ending of Luke: Jesus' Last Words and Ascension" , Matt: { ref: null , primary: false }, Mark: { ref: "16:15,19" , primary: false }, Luke: { ref: "24:44-53" , primary: true }, John: { ref: null , primary: false }, other: { ref: "Acts 1:4-14" }},
{pericope: 366 , title: "The Ending of John" , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "20:30-31" , primary: true }, other: { ref: null }},
{pericope: 367 , title: "The Appendix to John: Jesus at the Sea of Tiberias." , Matt: { ref: null , primary: false }, Mark: { ref: null , primary: false }, Luke: { ref: null , primary: false }, John: { ref: "21:1-25" , primary: true }, other: { ref: null }},
], 

sections: [
{section: 1 , title: "Preface", pericopes: "1", refs: "Matt 1:1; Mark 1:1; Luke 1:1-4; John 1:1-18; Acts 1:1-2"},
{section: 2 , title: "Birth and Childhood", pericopes: "2-12", refs: "Matt 1:2-25; Matt 2:1-23; Luke 1:5-80; Luke 2:1-52; Luke 3:23-38"},
{section: 3 , title: "Preparation", pericopes: "13-20", refs: "Matt 3:1-17; Matt 4:1-11; Matt 14:3-4; Mark 1:2-13; Mark 6:17-18; Luke 1:5-80; Luke 2:1-52; Luke 3:23-38; John 1:19-34"},
{section: 4 , title: "The Beginning of Jesus' Public Ministry (According to John)", pericopes: "21-29", refs: "Matt 21:12-13; Mark 11:15-17; Luke 19:45-46; John 1:35-51; John 2:1-35; John 3:1-3"},
{section: 5 , title: "Jesus' Ministry in Galilee", pericopes: "30-49", refs: "Matt 4:12-25; Matt 8:1-4,14-17; Matt 9:1-17; Matt 10:1-4; Matt 12:1-16; Matt 13:53-58; Mark 1:14-45; Mark 2:1-28; Mark 3:1-19; Mark 6:1-6; Luke 4:14-44; Luke 5:1-39; Luke 6:1-19; Acts 1:13b"},
{section: 6 , title: "The Sermon on the Mount (According to Matthew)", pericopes: "50-76", refs: "Matt 4:24-25; Matt 5:1-48; Matt 6:1-34; Matt 7:1-29; Matt 12:33-35; Mark 1:21-22; Mark 3:7-13; Mark 4:21,24-25; Mark 9:43-50; Mark 11:25; Luke 6:17-23,27-49; Luke 8:16; Luke 11:1-4,9-13,34-36; Luke 12:22-34,57-59; Luke 13:23-27; Luke 4:34-35; Luke 16:13,16-18; Acts 15:19-20,28-29; Acts 20:35; Acts 21:25; Rom 2:1-3; 1 Cor 7:10-16; Jas 5:12; 1 Pet 3:14; 1 Pet 4:14"},
{section: 7 , title: "The Sermon on the Plain (According to Luke)", pericopes: "77-83", refs: "Matt 4:24-25; Matt 5:1-12,38-48; Matt 7:1-5,15-27; Matt 12:33-35; Mark 3:7-13a; Mark 4:24-25; Luke 6:17-49; Acts 20:35; Rom 2:1-3; 1 Pet 4:14"},
{section: 8 , title: "Jesus' Ministry in Galilee Continued", pericopes: "84-156", refs: "Matt 5:15; Matt 7:2,16-20; Matt 8:1-34; Matt 9:1-38; Matt 10:1-42; Matt 11:1-30; Matt 12:1-50; Matt 13:1-58; Matt 14:1-36; Matt 15:1-39; Matt 16:1-12; Matt 20:29-34; Matt 24:9-14; Matt 26:6-13; Mark 1:29-34,40-45; Mark 2:1-28; Mark 3:1-35; Mark 4:1-41; Mark 5:1-43; Mark 6:1-56; Mark 7:1-37; Mark 8:1-26; Mark 9:41; Mark 10:46-52; Mark 13:9-13; Mark 14:3-9; Luke 3:19-20; Luke 4:16-30,38-41; Luke 5:12-39; Luke 6:1-19,39-40,43-45; Luke 7:1-50; Luke 8:1-56; Luke 9:1-17,57-62; Luke 10:2-3,12-16,21-24; Luke 11:14-26,29-32,37-41; Luke 12:1-12,51-56; Luke 13:18-21,28-29; Luke 14:25-27; Luke 16:16; Luke 17:33; Luke 18:35-43; Luke 21:12-19; John 4:46-54; John 5:1-47; John 6:1-59; John 12:1-8,25; John 13:2,16; John 15:14; Acts 1:13b; Acts 27:34; 1 Cor 9:5-14; 1 Tim 5:18; 2 Tim 2:12; Jas 5:4; Rev 3:5"},
{section: 9 , title: "The Way to the Cross", pericopes: "157-173", refs: "Matt 5:13; Matt 10:42; Matt 16:13-28; Matt 17:1-27; Matt 8:1-35; Mark 8:27-38; Mark 9:1-50; Luke 9:18-50; Luke 14:34-35; Luke 15:3-7; Luke 17:1-4,6; John 6:60-71; John 12:25; John 13:2; John 20:23; 1 Cor 12:3; 2 Tim 2:12; 2 Pet 1:16-18; 2 Pet 3:9"},
{section: 10 , title: "Last Journey to Jerusalem (According to Luke)", pericopes: "174-237", refs: "Matt 5:13,15,18,25-26; Matt 6:9-13,19-34; Matt 7:7-11,13-14,22-23; Matt 8:11-12,18-22; Matt 9:37-38; Matt 10:4,7-16,19-20,26-39; Matt 11:12-13,20-27; Matt 12:22-32,38-45; Matt 13:16-17,31-33; Matt 15:1-9; Matt 16:2-3,5-6; Matt 17:19-21; Matt 18:6-7,12-15; Matt 19:1-2,9,30; Matt 22:1-14,34-40; Matt 23:37-39; Matt 24:17-18,23,26-28,37-51; Mark 3:22-30; Mark 4:21,30-32; Mark 7:1-9; Mark 8:11-12,14-15; Mark 9:28-29,42,49-50; Mark 10:1,11-12,31; Mark 12:28-34; Mark 13:11,14-16,19-23; Luke 9:51-62; Luke 10:1-42; Luke 1:1-54; Luke 12:1-9,11-59; Luke 13:1-35; Luke 14:1-35; Luke 15:1-32; Luke 16:1-31; Luke 17:1-37; Luke 18:1-14; Luke 21:14-15; John 12:25; John 13:2; Acts 7:51-53; Acts 27:34; Rom 13:8-10; 1 Cor 9:5-14; Gal 5:14; 1 Thess 5:2; 1 Tim 5:18; 2 Tim 2:12; Jas 2:8; Jas 5:4; Rev 3:5; Rev 16:15"},
{section: 11 , title: "Jesus at the Feast of Tabernacles (According to John)", pericopes: "238-250", refs: "John 7:1-53; John 8:1-8,12-59; John 9:1-41; John 10:1-21"},
{section: 12 , title: "The Ministry in Judea", pericopes: "251-268", refs: "Matt 9:27-31; Matt 18:11; Matt 19:1-30; Matt 20:1-34; Matt 25:14-30; Matt 26:6-13; Mark 10:1-52; Mark 13:34; Mark 14:3-9; Luke 7:36-50; Luke 9:51; Luke 13:3; Luke 16:18; Luke 18:15-43; Luke 19:1-27; Luke 22:24-30; John 10:22-42; John 11:1-57; John 12:1-11; Rom 13:9; 1 Cor 7:10-16; 1 Tim 2:5-6"},
{section: 13 , title: "The Final Ministry in Jerusalem", pericopes: "269-286", refs: "Matt 6:14-15; Matt 21:1-46; Matt 22:1-46; Matt 23:1-39; Mark 11:1-33; Mark 12:1-44; Luke 10:25-28; Luke 13:34-35; Luke 14:15-24; Luke 19:28-48; Luke 20:1-47; Luke 21:1-4; John 2:13-17; John 12:12-19; Acts 2:29-36; Acts 7:51-53; Rom 13:8-10; 1 Cor 15:40-44; Gal 5:14; Heb 10:12-13; Jas 2:8"},
{section: 14 , title: "The Olivet Discourse", pericopes: "287-295", refs: "Matt 10:17-22; Matt 24:1-36,42; Matt 25:13-15; Mark 13:1-37; Luke 12:11-12,40; Luke 17:23-24,37; Luke 19:12-13; Luke 21:5-36; 1 Thess 4:16; 2 Thess 2:3-4,8-10; 2 Tim 2:12; 2 Pet 3:3"},
{section: 15 , title: "Conclusion of the Account before the Passion", pericopes: "296-304", refs: "Matt 24:37-51; Matt 25:1-46; Mark 13:34-35; Luke 12:39-46; Luke 17:26-36; Luke 19:11-27; Luke 21:37-38; John 5:29; John 12:20-50; Rom 14:10; 1 Cor 15:35-44; 2 Cor 5:10; 1 Thess 5:1-6; 2 Pet 3:10; Rev 3:3; Rev 16:15"},
{section: 16 , title: "The Passion Narrative", pericopes: "305-351", refs: "Matt 10:24,40; Matt 19:28; Matt 20:24-28; Matt 26:1-75; Matt 27:1-66; Mark 10:41-45; Mark 14:1-72; Mark 15:1-47; Luke 6:4; Luke 7:36-50; Luke 22:1-71; Luke 23:1-56; John 12:1-8,27; John 13:1-38; John 14:1-31; John 15:1-27; John 16:1-33; John 17:1-26; John 18:1-40; John 19:1-42; Acts 1:15-20; Acts 3:13-14; Acts 4:27-28; Acts 6:14; Acts 7:59-60; Acts 13:27-29; 1 Cor 5:7; 1 Cor 10:16-17; 1 Cor 11:23-26; Heb 5:7; 1 John 2:1-2; 1 John 5:6-8; Rev 1:7; Rev 13:10"},
{section: 17 , title: "The Resurrection", pericopes: "352-361", refs: "Matt 28:1-20; Mark 16:1-18; Luke 24:1-43; John 20:1-29; John 21:1-14; Acts 10:41; Acts 13:31; 1 Cor 15:3-8"},
{section: 18 , title: "The Endings of the Gospels", pericopes: "362-367", refs: "Matt 28:16-20; Mark 16:9-20; Luke 24:44-53; John 20:30-31; John 21:1-25; Acts 1:4-14"},
],

/**
 * @typedef {{pericope: number, title: string, 
     *  Matt: { ref: string,  primary: boolean }, 
     *  Mark: { ref: string , primary: boolean },
     *  Luke: { ref:  string , primary: boolean }, 
     *  John: { ref:string , primary: boolean }, 
     *  other: { ref:string }}} pericopegroup
 */

/**
 * @name lookupPericope
 * @param {number} num 
 * @returns {{pericope: number, title: string, 
     *  Matt: { ref: string,  primary: boolean }, 
     *  Mark: { ref: string , primary: boolean },
     *  Luke: { ref:  string , primary: boolean }, 
     *  John: { ref:string , primary: boolean }, 
     *  other: { ref:string }}} 
 */
lookupPericope(num){
   // mylog("lookupPericope("+num+")")
    return this.pericopes.find((p)=>parseInt(p.pericope)==parseInt(num));
},

/**
 * @description Given two Aland pericopes-groups, return a list of those "primary" gospels that they share.
 * @param {pericopegroup} a 
 * @param {pericopegroup} b 
 * @returns {string[]} array of names from 'gospels.names' for those which both pericope-groups from references marked as "primary"
 */
getCommonPrimaries(a,b){
    const commonPrimaries= [];
   /* mylog("getCommonPrimaries: a=",true);
    mylog(a, true);
    mylog("a.Matt=",true)
    mylog(a.Matt);
    mylog("^---That was a.Matt!", true)
     mylog("a['Matt']=",true)
    mylog(a["Matt"]);
    mylog("^---That was a['Matt']!", true)
    mylog("But 'a' still = ");
    mylog(a, true);
    mylog('typeof a =' + typeof a, true);
    mylog('typeof a.Matt =' + typeof a.Matt, true);*/
    if(a && b) {
        if (a.Matt && a.Matt.primary && b.Matt && b.Matt.primary)
            commonPrimaries.push(gospels.names.MATTHEW);
        if (a.Mark && a.Mark.primary && b.Mark && b.Mark.primary)
            commonPrimaries.push(gospels.names.MARK);
        if (a.Luke && a.Luke.primary && b.Luke && b.Luke.primary)
            commonPrimaries.push(gospels.names.LUKE);
        if (a.John && a.John.primary && b.John && b.John.primary)
            commonPrimaries.push(gospels.names.JOHN);
    }
    return  commonPrimaries;
},

/**
 * @description Given two Aland pericopes-groups, return a list of those gospels that they share.
 * @param {pericopegroup} a primary
 * @param {pericopegroup} b 
 * @returns {string[]} array of names from 'gospels.names' for those which both pericope-groups have references 
 */
getCommonGospels(a,b){
    const commonGospels= [];
    if (a.Matt && a.Matt.ref && b.Matt && b.Matt.ref)
        commonGospels.push(gospels.names.MATTHEW);
    if (a.Mark && a.Mark.ref && b.Mark && b.Mark.ref)
        commonGospels.push(gospels.names.MARK);
     if (a.Luke && a.Luke.ref && b.Luke && b.Luke.ref)
        commonGospels.push(gospels.names.LUKE);
    if (a.John && a.John.ref && b.John && b.John.ref)
        commonGospels.push(gospels.names.JOHN);
    return  commonGospels;
},
/**
 * 
 * @param {number} num  
 * @returns {{section: number, title: string, pericopes: string, refs: string}}
 */
lookupSection(num){
     return this.sections.find((s)=>s.section==num);    
},

isPrimaryPericope(pericopeNum, primaryGospel=''){
    const per = this.lookupPericope(pericopeNum);
    let isPrimary=true;
    if (per) {
        if (
            (primaryGospel==gospels.names.MATTHEW && !per.Matt.primary) ||
            (primaryGospel==gospels.names.MARK && !per.Mark.primary) ||
            (primaryGospel==gospels.names.LUKE && !per.Luke.primary) ||
            (primaryGospel==gospels.names.JOHN && !per.John.primary)){
                
                isPrimary=false;
        }
        else {
            //do nada: probably passes...?
        }
            

    }
    else {
        isPrimary=false;
    }
    return isPrimary;

},

getPericopeGospelRef(pericope, selectedGospel){
    let ref = ''
    if (selectedGospel==gospels.names.MATTHEW)
        ref = pericope.Matt.ref;
    else if (selectedGospel==gospels.names.MARK)
        ref = pericope.Mark.ref;
    else if (selectedGospel==gospels.names.LUKE)
        ref = pericope.Luke.ref;
    else if (selectedGospel==gospels.names.JOHN)
        ref = pericope.John.ref;
    return ref;
}

};
