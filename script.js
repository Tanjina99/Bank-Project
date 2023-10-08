const enterButton = document.getElementById('enter-btn');
        enterButton.addEventListener('click', function () {
            //value getting
            const emailInput = document.getElementById("email");
            const passwordInput = document.getElementById("password");
            const enterButton = document.getElementById("enter-btn");

            const emailValue = emailInput.value;
            const passwordValue = passwordInput.value;

            // console.log("Email:", emailValue);
            // console.log("Password:", passwordValue);

            if (!emailInput || !passwordValue) {
                alert("You need to give your email and password")
            } else {
                const hidearea = document.getElementById('login-area');
                hidearea.style.display = "none";
                const transactionArea = document.getElementById('transaction-area');
                transactionArea.style.display = 'block';
            }



        })

        // Deposit event listener

        const depositButton = document.getElementById('depositBtn');
        depositButton.addEventListener('click', function () {
            const depositNumber = getInput('depositammount');


            //function calling
            updateSpanTag('currentBalance', depositNumber);
            updateSpanTag('depositadd', depositNumber);

            document.getElementById('depositammount').value = '';
        })

        //Withdraw event listener
        const withdrawButton = document.getElementById('addWithdraw');
        withdrawButton.addEventListener('click', function () {
            const withdrawNumbers = getInput('withdrawammount');

            updateSpanTag('currentWithdraw', withdrawNumbers);
            updateSpanTag('currentBalance', -1 * withdrawNumbers);

            document.getElementById('withdrawammount').value = '';
        })

        function getInput(id) {
            const ammount = document.getElementById(id).value;
            const ammountNumber = parseFloat(ammount);
            return ammountNumber;
        }

        function updateSpanTag(id, depositNumber) {
            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);
            const total = depositNumber + currentNumber;
            document.getElementById(id).innerText = total;
        }