function toggleLanguage() {
    var languageButton = document.getElementById("languageButton");
    var languageFlag = languageButton.innerHTML.trim();

    if (languageFlag === "🇺🇸") {
        languageButton.innerHTML = "🇧🇷";

        // Update text to English
        document.getElementById("section1Title").innerText = "1. Collection and Use of Personal Information";
        document.getElementById("section1Text").innerText = "1.1 Information Collection";
        document.getElementById("section1Content").innerText = "The TooDo app collects only your name and email address for creating a user account. This information is strictly necessary to personalize your experience in the app and provide relevant functionalities.";
        document.getElementById("section1_2Text").innerText = "1.2 Information Storage";
        document.getElementById("section1_2Content").innerText = "The information collected by the TooDo app is securely stored on Firebase servers provided by Google. Firebase is used as a cloud database to store your account data and save the tasks created by you.";

        document.getElementById("section2Title").innerText = "2. Data Protection and Security";
        document.getElementById("section2Text").innerText = "2.1 Data Security";
        document.getElementById("section2Content").innerText = "We take appropriate measures to ensure the security of personal information collected by the TooDo app. We implement technical and organizational measures to protect your data against unauthorized access, misuse, alteration, or unauthorized disclosure.";
        document.getElementById("section2_2Text").innerText = "2.2 Data Access";
        document.getElementById("section2_2Content").innerText = "Only authorized TooDo employees have access to the personal information collected, and they are required to maintain the confidentiality of this information.";
        document.getElementById("section2_3Text").innerText = "2.3 Biometric Authentication";
        document.getElementById("section2_3Content").innerText = "The TooDo app uses biometric authentication, such as fingerprint or facial recognition, as the default method of logging into your account. This adds an additional layer of security to accessing your data.";

        document.getElementById("section3Title").innerText = "3. Information Sharing";
        document.getElementById("section3Text").innerText = "3.1 Limited Sharing";
        document.getElementById("section3Content").innerText = "We do not share your personal information with third parties except as necessary to provide the services offered by the TooDo app or as required by law.";

        document.getElementById("section4Title").innerText = "4. Changes to Terms and Conditions";
        document.getElementById("section4Content").innerText = "We reserve the right to modify these Terms and Conditions of Use at any time at our discretion. Any changes will be posted on the TooDo app, and the update date will be indicated at the beginning of the revised Terms. Your continued use of the app after the publication of changes will constitute your acceptance of these changes.";

        document.getElementById("section5Title").innerText = "5. Contact";
        document.getElementById("section5Content").innerText = "If you have any questions, concerns, or suggestions about these Terms and Conditions of Use, please contact us at toodo4473@gmail.com.";
        document.getElementById("section5Agreement").innerText = "By using the TooDo app, you acknowledge that you have read, understood, and agree to these Terms and Conditions of Use.";
    } else {
        languageButton.innerHTML = "🇺🇸";

        // Update text to Portuguese
        document.getElementById("section1Title").innerText = "1. Coleta e Uso de Informações Pessoais";
        document.getElementById("section1Text").innerText = "1.1 Coleta de Informações";
        document.getElementById("section1Content").innerText = "O aplicativo TooDo coleta apenas o seu nome e endereço de e-mail para a criação de uma conta de usuário. Essas informações são estritamente necessárias para personalizar sua experiência no aplicativo e fornecer funcionalidades relevantes.";
        document.getElementById("section1_2Text").innerText = "1.2 Armazenamento de Informações";
        document.getElementById("section1_2Content").innerText = "As informações coletadas pelo aplicativo TooDo são armazenadas com segurança nos servidores do Firebase, fornecidos pela Google. O Firebase é utilizado como um banco de dados na nuvem para armazenar os dados da sua conta e salvar as tarefas criadas por você.";

        document.getElementById("section2Title").innerText = "2. Proteção de Dados e Segurança";
        document.getElementById("section2Text").innerText = "2.1 Segurança dos Dados";
        document.getElementById("section2Content").innerText = "Tomamos medidas adequadas para garantir a segurança das informações pessoais coletadas pelo aplicativo TooDo. Implementamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado, uso indevido, alteração ou divulgação não autorizada.";
        document.getElementById("section2_2Text").innerText = "2.2 Acesso aos Dados";
        document.getElementById("section2_2Content").innerText = "Apenas os funcionários autorizados da TooDo têm acesso às informações pessoais coletadas, e eles são obrigados a manter a confidencialidade dessas informações.";
        document.getElementById("section2_3Text").innerText = "2.3 Autenticação Biométrica";
        document.getElementById("section2_3Content").innerText = "O aplicativo TooDo utiliza a autenticação biométrica, como impressão digital ou reconhecimento facial, como método padrão de login na sua conta. Isso adiciona uma camada adicional de segurança ao acesso aos seus dados.";

        document.getElementById("section3Title").innerText = "3. Compartilhamento de Informações";
        document.getElementById("section3Text").innerText = "3.1 Compartilhamento Limitado";
        document.getElementById("section3Content").innerText = "Nós não compartilhamos suas informações pessoais com terceiros, exceto conforme necessário para fornecer os serviços oferecidos pelo aplicativo TooDo ou quando exigido por lei.";

        document.getElementById("section4Title").innerText = "4. Alterações nos Termos e Condições";
        document.getElementById("section4Content").innerText = "Reservamo-nos o direito de modificar estes Termos e Condições de Uso a qualquer momento, a nosso critério. Quaisquer alterações serão publicadas no aplicativo TooDo e a data de atualização será indicada no início dos Termos revisados. O uso contínuo do aplicativo após a publicação das alterações constituirá sua aceitação dessas mudanças.";

        document.getElementById("section5Title").innerText = "5. Contato";
        document.getElementById("section5Content").innerText = "Se você tiver alguma dúvida, preocupação ou sugestão sobre estes Termos e Condições de Uso, entre em contato conosco pelo e-mail toodo4473@gmail.com.";
        document.getElementById("section5Agreement").innerText = "Ao utilizar o aplicativo TooDo, você reconhece que leu, entendeu e concorda com estes Termos e Condições de Uso.";
    }
}
