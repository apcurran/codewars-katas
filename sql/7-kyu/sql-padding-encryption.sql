SELECT
    sha256,
    RPAD(md5, LENGTH(sha256), '1') AS md5,
    LPAD(sha1, LENGTH(sha256), '0') AS sha1
FROM encryption;
