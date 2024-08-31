//your JS code here. If required.

document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('.code');
    
    inputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            // Move focus to the next input if current input is filled
            if (input.value.length === 1 && index < inputs.length - 1) {
                inputs[index + 1].focus();
            }
        });

        input.addEventListener('keydown', (e) => {
            // Move focus to the previous input on backspace
            if (e.key === 'Backspace' && input.value === '' && index > 0) {
                inputs[index - 1].focus();
            }
        });
    });
});
