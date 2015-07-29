C:\GnuWin32\bin\openssl genrsa -out quiz-2015-key.pem 2048
C:\GnuWin32\bin\openssl req -new -sha256 -key quiz-2015-key.pem -out quiz-2015-csr.pem -config C:\GnuWin32\share\openssl.cnf
C:\GnuWin32\bin\openssl x509 -req -in quiz-2015-csr.pem -signkey quiz-2015-key.pem -out quiz-2015-cert.pem
