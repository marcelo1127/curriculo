    document.getElementById('botao').addEventListener('click', function() {
    const currentLanguage = document.documentElement.lang;

    


    if (currentLanguage === 'pt-BR') {
       
        document.documentElement.lang = 'en-US'; 
        document.getElementById('image').src='assets/flag-us-svgrepo-com.svg';

        document.getElementById('estudo').textContent = 'Estudante de Análise e Desenvolvimento de Sistemas';
        document.getElementById('formacao').textContent = 'Formação'; 
        document.getElementById('obje').textContent = 'Objetivos'; 
        document.getElementById('projeto').textContent = 'Projetos'; 
        document.getElementById('descricao').textContent = 'Descrição'; 
        document.getElementById('contatos').textContent = 'Contatos'; 
        document.getElementById('sobre_mim').textContent = 'Sobre mim';
        document.getElementById('sobre_mim').textContent = 'Sobre mim';
        document.getElementById('sobre').textContent = 'Me chamo Marcelo Alves de Lima Filho, sou estudante de Análise e Desenvolvimento de Sistemas e estou em busca da minha primeira oportunidade como desenvolvedor front-end júnior ou estagiário. Tenho grande interesse por tecnologia e foco em criar interfaces modernas, funcionais e responsivas.Minhas principais habilidades incluem HTML, CSS, JavaScript, Bootstrap e Node.js. Também tenho conhecimentos em UX/UI, responsividade, prototipação no Figma, além de noções em C#, .NET e banco de dados.Sou dedicado, curioso e estou sempre em busca de aprendizado. Acredito que uma oportunidade na área será essencial para meu crescimento profissional e estou pronto para contribuir com entusiasmo, responsabilidade e vontade de evoluir.';
        document.getElementById('descri').textContent = 'Descrição pessoal';
        document.getElementById('cristão').textContent = 'Cristão e comprometido com princípios éticos, Amo meu Deus acima de tudo';
        document.getElementById('leader').textContent = 'Liderança: Gerente de projetos acadêmicos e pessoais';
        document.getElementById('empatia').textContent = 'Empatia e facilidade em entender necessidades dos outros';
        document.getElementById('skills').textContent = 'Habilidade para trabalhar em equipe e resolver problemas';
        document.getElementById('calmo').textContent = 'Calmo e analítico em situações desafiadoras';
        document.getElementById('objective').textContent = 'Objetivo profissional';
        document.getElementById('busco').textContent = ' Busco uma oportunidade para me firmar em uma empresa, adquirir as experiências necessárias e crescer junto com a organização, desenvolvendo minhas habilidades até conquistar um cargo de liderança.';
        document.getElementById('formation').textContent = 'Formação Acadêmica';
        document.getElementById('an').textContent = ' USCS Universidade Municipal de São Caetano do Sul | previsão de conclusão - dezembro 2026';
        document.getElementById('cursos').textContent = 'Cursos e conhecimentos';

        
        document.getElementById('matheus').textContent = 'Mateus 5:10-12';
        document.getElementById('word').textContent = '"Felizes são os perseguidos por causa da justiça, pois o Reino dos céus lhes pertence. Felizes são vocês quando os insultam, os perseguem e mentem a seu respeito, dizendo todo tipo de mal contra vocês por minha causa. Alegrem-se e exultem, porque grande é a recompensa de vocês nos céus. Pois da mesma forma perseguiram os profetas que viveram antes de vocês."';
        document.getElementById('pp').textContent = 'Projetos Acadêmicos';
        document.getElementById('ff').textContent = 'Sites desenvolvidos durante a faculdade e cursos na alura';
       
        document.getElementById('personal').textContent = 'Projetos Pessoais';
        document.getElementById('cliente').textContent = 'Projetos sendo desenvolvidos para clientes';
       
        document.getElementById('cmg').textContent = 'Contatos';
    } else {
        document.documentElement.lang = 'pt-BR'; 
        document.getElementById('image').src='assets/flag-for-flag-brazil-svgrepo-com.svg';
        document.getElementById('estudo').textContent = 'Systems Analysis and Development Student'; 
        document.getElementById('formacao').textContent = 'Formation'; 
        document.getElementById('obje').textContent = 'Obejectives'; 
        document.getElementById('projeto').textContent = 'Projects'; 
        document.getElementById('descricao').textContent = 'Description'; 
        document.getElementById('contatos').textContent = 'Contacts'; 
        document.getElementById('sobre_mim').textContent = 'About me';
        document.getElementById('sobre').textContent = 'My name is Marcelo Alves de Lima Filho, and I’m a student of Systems Analysis and Development. I’m currently looking for my first opportunity as a junior front-end developer or intern. I have a strong interest in technology and a focus on building modern, functional, and responsive interfaces.My main skills include HTML, CSS, JavaScript, Bootstrap, and Node.js. I also have knowledge in UX/UI design, responsive layouts, prototyping with Figma, and some experience with C#, .NET, and databases.I am dedicated, curious, and constantly learning. I believe that an opportunity in the field will be essential for my professional growth, and I’m ready to contribute with enthusiasm, responsibility, and a strong desire to improve.';
        document.getElementById('descri').textContent = 'Personal Description';
        document.getElementById('cristão').textContent = 'Christian and committed to ethical principles, I love my God above all';
        document.getElementById('leader').textContent = 'Leadership: Manager of academic and personal projects';
        document.getElementById('empatia').textContent = 'Empathy and ability to understand others’ needs';
        document.getElementById('skills').textContent = 'Teamwork and problem-solving skills';
        document.getElementById('calmo').textContent = 'Calm and analytical in challenging situations';
        document.getElementById('objective').textContent = 'Professional Objective';
        document.getElementById('busco').textContent = 'I seek an opportunity to establish myself in a company, gain the necessary experience, and grow together with the organization, developing my skills until reaching a leadership position.';
        document.getElementById('formation').textContent = 'Academic Background';
        document.getElementById('an').textContent = 'USCS - Municipal University of São Caetano do Sul | expected graduation - December 2026';
        document.getElementById('cursos').textContent = 'Courses and Knowledge';




        document.getElementById('matheus').textContent = 'Matthew 5:10-12';
        document.getElementById('word').textContent = '"Blessed are those who are persecuted because of righteousness, for theirs is the kingdom of heaven. Blessed are you when people insult you, persecute you and falsely say all kinds of evil against you because of me. Rejoice and be glad, because great is your reward in heaven, for in the same way they persecuted the prophets who were before you."';
        document.getElementById('pp').textContent = 'Academic Projects';
        document.getElementById('ff').textContent = 'Websites developed during college and courses at Alura';
       
        document.getElementById('personal').textContent = 'Personal Projects';
        document.getElementById('cliente').textContent = 'Projects being developed for clients';
  
        document.getElementById('cmg').textContent = 'Contact';
    }

    
});



document.getElementById('scrollUpBtn').addEventListener('click', function() {
    let scrollInterval = setInterval(function() {
      let scrollPosition = window.pageYOffset;
      if (scrollPosition > 0) {
        window.scrollTo(0, scrollPosition - 7); 
      } else {
        clearInterval(scrollInterval); 
      }
    }, 7);
  });
  
  

/*      document.getElementById('cs').textContent = 'C# com .NET Framework';
        document.getElementById('html').textContent = 'HTML e CSS para Sites';
        document.getElementById('figma').textContent = 'Figma para Design';
        document.getElementById('sql').textContent = 'MySQL';
        document.getElementById('c+').textContent = 'C/C++ ';
        document.getElementById('java').textContent = 'Java';
        document.getElementById('oracle').textContent = 'Oracle';
        document.getElementById('redes').textContent = 'Redes de Computadores';
        document.getElementById('logica').textContent = 'Lógica de Programação';
        document.getElementById('banco').textContent = 'Análise de Banco de Dados';
        document.getElementById('si').textContent = 'Análise de Sistemas',
        document.getElementById('ux').textContent = 'UX/UI ';
        document.getElementById('resp').textContent = 'Responsividade ';
        document.getElementById('in').textContent = 'Inglês: B2'; */



        /*  document.getElementById('cs').textContent = 'C# with .NET Framework';
        document.getElementById('html').textContent = 'HTML and CSS for Websites';
        document.getElementById('figma').textContent = 'Figma for Design';
        document.getElementById('sql').textContent = 'MySQL';
        document.getElementById('c+').textContent = 'C/C++';
        document.getElementById('java').textContent = 'Java';
        document.getElementById('oracle').textContent = 'Oracle';
        document.getElementById('redes').textContent = 'Computer Networks';
        document.getElementById('logica').textContent = 'Programming Logic';
        document.getElementById('banco').textContent = 'Database Analysis';
        document.getElementById('si').textContent = 'Systems Analysis';
        document.getElementById('ux').textContent = 'UX/UI';
        document.getElementById('resp').textContent = 'Responsiveness';
        document.getElementById('in').textContent = 'English: B2'; */