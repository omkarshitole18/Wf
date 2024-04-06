from django.shortcuts import render,HttpResponse
from django.template import loader
def user_login(request):
    #if request.method == 'POST':
        #username = request.POST['username']
        #password = request.POST['password']
        #user = authenticate(request, username=username, password=password)
        #if user is not None:
            #login(request, user)
            #return 
    # redirect('success')
        #else:
          # return render(request, 'login.html', {'error_message': 'Invalid username or password.'})
     return render(request, 'login.html')
	



def success(request):
    return render(request, 'success.html')

