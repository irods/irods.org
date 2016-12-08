# iRODS.org website


## Requirements
- python
- pip

Then:

```pip install virtualenv```

## Prepare virtual environment
```
virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
```

- Installs Pelican and other necessary python modules.

## Build site
```
make
```

- Cleans existing output directory and rebuilds website during development

```
make publish
```

- Builds website for publishing (with absolute URLs and feeds)

## Deploy via rsync
```
rsync -arv output/ user@target:/path/to/output/
```

- Syncs built output directory to target server

## Activate deployed .htaccess

```
    AllowOverride FileInfo
```

- For Apache, allow the deployed `.htaccess` to override settings for the active `Directory`
