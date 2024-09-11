<h1>Project overview</h1>

<h4>Configured virtual machines</h4>

The main idea was to make a data center from the picture. I used Virtual Box for virtualization, where I configured VM representing a DNS server (with bind9 service); 
also configured VM that represents web server (with apache and enabled virtual hosting of two web sites on a same server with apache virtual hosts) and two virtual machines
representing MySQL master and slave nodes configured to work as one (I used Percona MySQL solution for HA). I virtualized virtual machines with Vagrant and automated the whole 
configuration process of the entire data center with Ansible.

![PDC](https://github.com/user-attachments/assets/47c0f940-5935-4ea9-b064-0788677095bf)

After connecting virtual machines and their IP addresses with Ansible, this is the complete  result after execution of Ansible scripts. 

![8fd8gbgy](https://github.com/user-attachments/assets/a60a3957-2730-4a21-ac6a-3e8fec1a8fab)

Finally, this is the Angular/Laravel full-stack application with API that sends bash scripts to the virtual machines and retrives server information and provides following features:

Admin Dashboard:

![Screenshot (1741)](https://github.com/user-attachments/assets/3bccf586-cd3e-4895-8801-39d1b68b0a57)

![Screenshot (1745)](https://github.com/user-attachments/assets/f4f85570-7a95-472f-979a-5cd973705b04)

Features:

![Screenshot (1746)](https://github.com/user-attachments/assets/74906853-d68e-4523-81d0-77d27281566f)

![Screenshot (1747)](https://github.com/user-attachments/assets/2d24a485-ee9e-49e8-ae52-a3e9b0ae56ce)

![Screenshot (1748)](https://github.com/user-attachments/assets/747b881e-7cfd-4095-bf72-a63172760b36)

![Screenshot (1749)](https://github.com/user-attachments/assets/7a86d914-b6f5-40b0-9786-f8e93cefa852)

![Screenshot (1750)](https://github.com/user-attachments/assets/ece94270-095f-442c-ac19-d1e474e1d036)
