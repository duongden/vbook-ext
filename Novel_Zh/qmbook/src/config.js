let BASE_URL = 'https://www.qmbook.cc';
try {
    if (CONFIG_URL) {
        BASE_URL = CONFIG_URL;
    }
} catch (error) {
}