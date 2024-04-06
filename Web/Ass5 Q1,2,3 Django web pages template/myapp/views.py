from django.shortcuts import render,HttpResponse
from django.template import loader


# Create your views here.
#Q1
def index(request):
         return HttpResponse('Welcome to nowrosjee wadia college pune')  

def redirect(request):
	
	return render(request,"about.html")
#Q2

def redirect1(request):
	template=loader.get_template('contact.html')
	return HttpResponse(template.render())

#Q3

def redirect_view(request):
	template = loader.get_template("redirect_page.html")
	return HttpResponse(template.render())

#login

def user_login(request):
    
     redirect('success')
        
     return render(request, 'login.html')
	



def success(request):
    return render(request, 'success.html')





