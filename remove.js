const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    
    fs.readdir(logsDir, (err, files) => {
        if (err) throw err;
        files.forEach(file => {
            console.log(`delete files...${file}`);
            fs.unlink(path.join(logsDir, file), (err) => {
                if (err) throw err;
            });
        });
        fs.rmdir(logsDir, (err) => {
            if (err) throw err;
            console.log('Logs file removed');
        });
    });
} else {
    console.log('Logs file not exist.');
}
