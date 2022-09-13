import React, {useEffect, useState} from "react";
import {Footer, FooterBox, Header, InputBox, KeyInput, KeyText, SubmitBox, Wrapper} from "./Login.styles";
import {collection, onSnapshot, orderBy, query} from "firebase/firestore";
import {db} from "../../firebase";
import {useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    const [key, setKey] = useState('');
    let obj:any;
    const [users, setUsers] = useState([{id: "" , data: obj}])

    useEffect(() => {
        const userColRef = query(collection(db, 'users'), orderBy('created', 'desc'))
        onSnapshot(userColRef, (snapshot) => {
            setUsers(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    },[])
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        setKey(value);
    };

    const handleSubmit = () => {
        const found = users.find(element => element.data.key === key);
        if(found!==undefined){
            navigate("/level0")
        }
    };
    return (
        <Wrapper>
            <Header>ff</Header>
            <InputBox>
                <KeyText>
                    PUAMZB GWCZ RMG
                </KeyText>
                <KeyInput  type="password"
                           value={key}
                           onChange={handleInput}/>
                <SubmitBox><button onClick={handleSubmit}>Submit and Agree</button></SubmitBox>
            </InputBox>
            <FooterBox>
                <Footer>
                    この Web サイトにログインすると、すべての視聴者に適しているとは限らず、特定の視聴者には挑発的である可能性のある機密コンテンツが表示される場合があります。
                    同様に、このウェブサイトにログインすると、利用規約に自動的に署名したことになります。これにより、あなたの人に身体的、感情的、精神的、または経済的損害を与える責任から解放されます。
                    また、あなたは法定年齢に達していること、またはあなたの両親または保護者が利用規約に同意していることを確認します. このウェブサイトを継続しないことを強くお勧めします。 ff
                    من خلال تسجيل الدخول إلى هذا الموقع ، قد تجد محتوى حساسًا قد لا يكون مناسبًا لجميع الجماهير وقد يكون
                    مثيرًا لبعض الجماهير. بنفس الطريقة عند تسجيل الدخول إلى هذا الموقع ، فإنك تقوم تلقائيًا بالتوقيع على
                    الشروط والأحكام الخاصة بنا والتي بفضلها تعفينا من أي مسؤولية عن التسبب في أي ضرر جسدي أو عاطفي أو
                    عقلي أو مالي لشخصك. أنت تؤكد أيضًا أنك شخص في سن قانونية أو أن والديك أو الوصي عليك يوافقان على
                    الشروط والأحكام. ننصحك بشدة بعدم الاستمرار في هذا الموقع. وما يليها
                    Με τη σύνδεση σε αυτόν τον ιστότοπο ενδέχεται να βρείτε ευαίσθητο περιεχόμενο που μπορεί να μην
                    είναι κατάλληλο για όλα τα είδη κοινού και μπορεί να είναι προκλητικό για συγκεκριμένο κοινό. Με τον
                    ίδιο τρόπο, όταν συνδέεστε σε αυτόν τον ιστότοπο, υπογράφετε αυτόματα τους όρους και τις
                    προϋποθέσεις μας, χάρη στους οποίους μας απαλλάσσετε από κάθε ευθύνη για πρόκληση σωματικής,
                    συναισθηματικής, ψυχικής ή οικονομικής ζημίας στο άτομό σας. Επιβεβαιώνετε επίσης ότι είστε ενήλικος
                    ή ότι οι γονείς ή ο κηδεμόνας σας συμφωνούν με τους όρους και τις προϋποθέσεις. Σας συμβουλεύουμε
                    ανεπιφύλακτα να μην συνεχίσετε σε αυτόν τον ιστότοπο. ff
                    על ידי כניסה לאתר זה אתה עשוי למצוא תוכן רגיש אשר עשוי שלא להתאים לכל הקהלים ועלול להיות פרובוקטיבי
                    עבור קהלים מסוימים. באותו אופן כאשר אתה נכנס לאתר זה אתה חותם אוטומטית על התנאים וההגבלות שלנו
                    שבזכותם אתה משחרר אותנו מכל אחריות לגרימת נזק פיזי, רגשי, נפשי או כלכלי לאדם שלך. אתה גם מאשר שאתה
                    אדם בגיל החוקי או שהוריך או האפוטרופוס שלך מסכימים עם התנאים וההגבלות. אנו ממליצים בחום לא להמשיך
                    באתר זה. ff
                    Al iniciar sesion en esta pagina web podras encontrar contenido sensible el cual puede ser no apto
                    para todo publico y puede ser provocador para determinadas audiencias. De la misma manera al iniciar
                    sesion en esta pagina web de manera automatica firmas nuestros terminos y condiciones gracias a los
                    cuales nos libras de cualquier responsabilidad por ocasionar algun daño fisico, emocional, mental o
                    financiero a tu persona. Ademas nos confirmas que eres una persona mayor de edad o tus padres o
                    tutor estan de acuerdo con los terminos y condiciones. Te recomendamos encarecidamente no continuar
                    en este sitio web. ff
                </Footer>
            </FooterBox>
        </Wrapper>
    )
}
export default Login;