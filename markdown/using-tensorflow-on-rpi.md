# Using Tensorflow on a Raspberry Pi

## Use a virtual environment

1. Create a Virtual Environment:
   - Open a terminal on your Raspberry Pi.
   - Choose a directory where you want to create the virtual environment (e.g., a folder named "jupyter_env" in your home directory).
   - Run the following command: 

```Bash
python3 -m venv ~/jupyter_env
```
This command creates a new virtual environment in the specified directory.

2. Activate the Virtual Environment:

   - Run the following command:

```Bash
source ~/jupyter_env/bin/activate
```

Your terminal prompt should change to indicate that the virtual environment is active (e.g., (jupyter_env) tarikz@raspberrypi:~ $).



3. Install JupyterLab:

   - Now that the virtual environment is active, use pip (which now refers to the pip within the activated virtual environment) to install JupyterLab:

```Bash
pip install jupyterlab
```


## Install Docker

curl -sSL https://get.docker.com | sh

## Run a TensorFlow container 

docker pull tensorflow/tensorflow:latest
