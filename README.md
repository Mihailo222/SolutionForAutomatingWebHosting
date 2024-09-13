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

![Screenshot (1751)](https://github.com/user-attachments/assets/e0a59c6a-8819-4d7f-9644-de57b60e2a5a)

![Screenshot (1752)](https://github.com/user-attachments/assets/2b76f020-d9ee-408e-b578-e77b3897b568)

Features:


![Screenshot (1753)](https://github.com/user-attachments/assets/57707d65-79bc-4508-b1a0-04427b5582bd)

![Screenshot (1757)](https://github.com/user-attachments/assets/64ea1097-c7a3-4ce4-bc32-b34cb5551188)

![Screenshot (1754)](https://github.com/user-attachments/assets/9f642b61-ec3f-4882-a428-0655b3885de9)

![Screenshot (1755)](https://github.com/user-attachments/assets/a0f87493-786a-4676-bbe8-81551b8ee0af)

![Screenshot (1756)](https://github.com/user-attachments/assets/d979341c-e57c-4729-a006-f06ae77893bc)









